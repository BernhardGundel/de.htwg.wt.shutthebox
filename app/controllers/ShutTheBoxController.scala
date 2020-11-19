package controllers
import javax.inject._
import play.api.mvc._
import de.htwg.se.shutthebox.ShutTheBox
import de.htwg.se.shutthebox.controller.controllerComponent.ControllerInterface
import de.htwg.se.shutthebox.model.playerComponent.aiInterface
import play.api.libs.json.JsValue
import play.libs.Json


@Singleton
class ShutTheBoxController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  val gameController: ControllerInterface = ShutTheBox.controller
  var errDice: Boolean = false
  var errShut: Boolean = false
  var errShutRoll: Boolean = false

  def shutthebox: Action[AnyContent] = Action {
    Ok(views.html.mainmenu())
  }

  def help: Action[AnyContent] = Action {
    Ok(views.html.index())
  }

  def ingame: Any = Action(parse.json) {
    request: Request[JsValue] => {
      var ai = false
      var bigMatchfield = false

      ai = (request.body \"ai").as[Boolean]
      bigMatchfield = (request.body \"bigMatchfield").as[Boolean]
      gameController.startGame(if (bigMatchfield) 1 else 0, ai=ai)
      //Ok(views.html.ingame(gameController, errDice, errShut, errShutRoll))
      // Ok(gameToJson) funzt nicht
    }
  }


  def doShut(i:Int): Action[AnyContent] = Action {
    val result = gameController.doShut(i)
    if (result == "This shut is not allowed") {
      errDice = false
      errShut = true
      errShutRoll = false
    } else {
      errDice = false
      errShut = false
      errShutRoll = false
    }
    if (result == "Please roll the dice first!") {
      errDice = false
      errShutRoll = true
    } else {
      errDice = false
      errShutRoll = false
    }
    Ok(views.html.ingame(gameController, errDice, errShut, errShutRoll))
  }

  def rollDice: Action[AnyContent] = Action {
    val result: String = gameController.rollDice
    if (result == "Dice roll not allowed!") {
      errDice = true
      errShut = false
      errShutRoll = false
    } else {
      errDice = false
      errShut = false
      errShutRoll = false
    }
    Ok(views.html.ingame(gameController, errDice, errShut, errShutRoll))
  }

  def nextPlayer: Action[AnyContent] = Action {
    gameController.setCurrentPlayer()
    if (gameController.currentPlayerIndex < 2) {
      Ok(views.html.ingame(gameController, errDice, errShut, errShutRoll))
    } else {
      val players = gameController.getPlayers
      Ok(views.html.scoreboard(players(0).score, players(1).score))
    }
  }

  def undo: Action[AnyContent] = Action {
    gameController.undoShut()
    Ok(views.html.ingame(gameController, errDice, errShut, errShutRoll))
  }

  def redo: Action[AnyContent] = Action {
    gameController.redoShut()
    Ok(views.html.ingame(gameController, errDice, errShut, errShutRoll))
  }

  def gameToJson: Action[AnyContent] = Action {
    val ai: Boolean = if (gameController.getPlayers(1).isInstanceOf[aiInterface]) true else false
    val bigMatchfield = gameController.matchfield match {
      case null => None
      case _ => Some(gameController.matchfield.field.length < 12)
    }
    var field: Array[Boolean] = Array()
    var i = 0
    for (i <- 0 until gameController.matchfield.field.length -1) {
      field = field :+ gameController.matchfield.field(i).isShut
    }
    val die1 = gameController.dice(0).value
    val die2 =  gameController.dice(1).value
    val scorePlayer1 = gameController.getPlayers(0).score
    val scorePlayer2 = gameController.getPlayers(1).score
    val turn = gameController.currentPlayerIndex


    val json = """
      {
        "ai" : """ + ai + """,
        "bigMatchfield" : """ + bigMatchfield.getOrElse("null") + """,
        "field" : """ + Json.toJson(field) + """,
        "dice" : {
            "die1" : """ + die1 + """,
            "die2" : """ + die2 + """
        },
        "score" : {
          "scorePlayer1" : """ + scorePlayer1 + """,
          "scorePlayer2" : """ + scorePlayer2 + """
        },
        "turn" : """ + turn + """
      }
    """
    Ok(json)
  }

}