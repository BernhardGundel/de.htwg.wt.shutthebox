package controllers
import javax.inject._
import play.api.mvc._
import de.htwg.se.shutthebox.ShutTheBox
import de.htwg.se.shutthebox.controller.controllerComponent.{AllCellsShut, CellShut, ControllerInterface, DiceRolled, Redone, ShowScoreBoard, Undone}
import de.htwg.se.shutthebox.model.playerComponent.aiInterface
import play.api.libs.json._


@Singleton
class ShutTheBoxController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {

  val gameController: ControllerInterface = ShutTheBox.controller
  var errorMsg: String = ""

  var controllerJson: JsValue = Json.parse("{}")
  controllerToJson()

  def shutthebox: Action[AnyContent] = Action {
    Ok(views.html.mainmenu())
  }

  def help: Action[AnyContent] = Action {
    Ok(views.html.index())
  }

  def startGame: Action[JsValue] = Action(parse.json) {
    request: Request[JsValue] => {
      var ai: Boolean = false
      var bigMatchfield: Boolean = false
      ai = (request.body \"ai").as[Boolean]
      bigMatchfield = (request.body \"bigMatchfield").as[Boolean]
      gameController.startGame(if (bigMatchfield) 1 else 0, ai)
      controllerToJson()
      Ok(controllerJson)
    }
  }

  def ingame: Action[AnyContent] = Action {
    controllerToJson()
    Ok(views.html.ingame(gameController))
  }


  def doShut(): Action[JsValue] = Action(parse.json) {
    request: Request[JsValue] => {
      val index = (request.body \"index").as[Int]
      val result = gameController.doShut(index)
      errorMsg = result
      controllerToJson()
      Ok(controllerJson)
    }
  }

  def rollDice: Action[AnyContent] = Action(parse.json) {
    val result: String = gameController.rollDice
    errorMsg = result
    controllerToJson()
    Ok(controllerJson)
  }

  def nextPlayer: Action[AnyContent] = Action {
    gameController.setCurrentPlayer()
    controllerToJson()
    Ok(controllerJson)
  }

  def scoreboard: Action[AnyContent] = Action {
    val players = gameController.getPlayers
    Ok(views.html.scoreboard(players(0).score, players(1).score))
  }

  def undo: Action[AnyContent] = Action {
    gameController.undoShut()
    controllerToJson()
    Ok(controllerJson)
  }

  def redo: Action[AnyContent] = Action {
    gameController.redoShut()
    controllerToJson()
    Ok(controllerJson)
  }

  def controllerToJson: Action[AnyContent] = Action(parse.json) {
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
    val  die1 = gameController.dice(0).value
    val  die2  = gameController.dice(1).value
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
    Ok(json)
  }
}