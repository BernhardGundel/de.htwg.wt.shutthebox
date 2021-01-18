package controllers
import java.io.File
import java.nio.file.NoSuchFileException

import akka.actor.{ Actor, ActorRef, ActorSystem, Props }
import akka.stream.Materializer
import com.mohiva.play.silhouette.api.{ HandlerResult, Silhouette }
import com.mohiva.play.silhouette.api.actions.SecuredRequest
import javax.inject._
import play.api.mvc._
import de.htwg.se.shutthebox.ShutTheBox
import de.htwg.se.shutthebox.controller.controllerComponent.{ CellShut, ControllerInterface, DiceRolled, Redone, ShowScoreBoard, Undone }
import de.htwg.se.shutthebox.model.playerComponent.aiInterface
import play.api.libs.json._
import play.api.libs.streams.ActorFlow
import utils.auth.DefaultEnv

import scala.concurrent.{ ExecutionContext, Future }
import scala.swing.Reactor

@Singleton
class ShutTheBoxController @Inject() (cc: ControllerComponents, silhouette: Silhouette[DefaultEnv])(implicit system: ActorSystem, mat: Materializer, ec: ExecutionContext) extends AbstractController(cc) {
  val gameController: ControllerInterface = ShutTheBox.controller
  var errorMsg: String = ""

  var controllerJson: JsValue = Json.parse("{}")

  def startGame(ai: Boolean, bigMatchfield: Boolean): Unit = {
    gameController.startGame(if (bigMatchfield) 1 else 0, ai)
    controllerToJson
  }

  def doShut(index: Int): Unit = {
    println("doShut")
    val result = gameController.doShut(index)
    errorMsg = result
    controllerToJson
  }

  def rollDice(): Unit = {
    val result: String = gameController.rollDice
    errorMsg = result
    controllerToJson
  }

  def nextPlayer(): Unit = {
    gameController.setCurrentPlayer()
    println(gameController.currentPlayerIndex)
    controllerToJson
  }

  def undo(): Unit = {
    gameController.undoShut()
    controllerToJson
  }

  def redo(): Unit = {
    gameController.redoShut()
    controllerToJson
  }

  def checkSignedIn = silhouette.SecuredAction {
    Ok("You are successfully signed in.")
  }

  def controllerToJson() = {
    val ai: Boolean = if (gameController.getPlayers(1).isInstanceOf[aiInterface]) true else false
    val bigMatchfield = gameController.matchfield match {
      case null => None
      case _ => Some(gameController.matchfield.field.length < 12)
    }
    var field: Array[Boolean] = Array()

    gameController.matchfield match {
      case null => None
      case _ =>
        for (i <- 0 until gameController.matchfield.field.length) {
          field = field :+ gameController.matchfield.field(i).isShut
        }
    }
    val die1 = gameController.dice(0).value
    val die2 = gameController.dice(1).value
    var scorePlayer1 = 0
    var scorePlayer2 = 0
    var turn = 0
    gameController.getPlayers(0) match {
      case null => None
      case _ =>
        scorePlayer1 = gameController.getPlayers(0).score
        scorePlayer2 = gameController.getPlayers(1).score
        turn = gameController.currentPlayerIndex
    }

    val json: JsValue = Json.parse("""
      {
        "ai" : """ + ai + """,
        "bigMatchfield" : """ + bigMatchfield.getOrElse("false") + """,
        "field" : """ + Json.toJson(field) + """,
        "dice" : {
            "die1" : """ + die1 + """,
            "die2" : """ + die2 + """
        },
        "score" : {
          "scorePlayer1" : """ + scorePlayer1 + """,
          "scorePlayer2" : """ + scorePlayer2 + """
        },
        "turn" : """ + turn + """,
        "error" : """ + Json.toJson(errorMsg) + """
      }
    """)
    controllerJson = json
  }

  /*def socket = WebSocket.acceptOrResult[String, String] { request =>
    implicit val req = Request(request, AnyContentAsEmpty)
    silhouette.SecuredRequestHandler { securedRequest =>
      Future.successful(HandlerResult(Ok, Some(securedRequest.identity)))
    }.map {
      case HandlerResult(r, Some(user)) => Right(ActorFlow.actorRef { out => ShutTheBoxWebSocketActorFactory.create(out) })
      case HandlerResult(r, None) => Left(r)
    }
  }*/

  def socket = WebSocket.accept[String, String] { request =>
    ActorFlow.actorRef { out =>
      println("Connect received")
      ShutTheBoxWebSocketActorFactory.create(out)
    }
  }



  object ShutTheBoxWebSocketActorFactory {
    def create(out: ActorRef) = {
      Props(new ShutTheBoxWebSocketActor(out))
    }
  }

  class ShutTheBoxWebSocketActor(out: ActorRef) extends Actor with Reactor {
    listenTo(gameController)

    def receive: Actor.Receive = {
      case msg: String =>
        msg match {
          case msg if msg.contains("ai") =>
            val ai: Boolean = (Json.parse(msg) \ "ai").as[Boolean]
            val bigMatchfield: Boolean = (Json.parse(msg) \ "bigMatchfield").as[Boolean]
            startGame(ai, bigMatchfield)
          case "rollDice" => rollDice
          case msg if msg.contains("index") =>
            val index: Int = (Json.parse(msg) \ "index").as[Int]
            doShut(index)
          case "nextPlayer" => nextPlayer
          case "undo" => undo
          case "redo" => redo
        }
        controllerToJson
        out ! (controllerJson.toString())
        println("Sent Json to Client: " + msg)
    }

    reactions += {
      case event: DiceRolled => sendJsonToClient
      case event: CellShut => sendJsonToClient
      case event: Undone => sendJsonToClient
      case event: Redone => sendJsonToClient
      case event: ShowScoreBoard => sendJsonToClient
    }

    def sendJsonToClient() = {
      println("Received event from Controller")
      controllerToJson
      out ! (controllerJson.toString())
    }

  }
}

class ShutTheBoxFrontendController @Inject() (scc: SilhouetteControllerComponents)(implicit ex: ExecutionContext) extends SilhouetteController(scc) {
  def serveFrontend() = Action { implicit request: Request[AnyContent] =>
    try {
      Ok.sendFile(new File("/app/public/frontend/index.html"), inline = true)
    } catch {
      case e: NoSuchFileException => Ok.sendFile(new File("./public/frontend/index.html"), inline = true)
    }
  }
}