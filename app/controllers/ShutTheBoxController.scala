package controllers
import javax.inject._
import play.api.mvc._
import de.htwg.se.shutthebox.ShutTheBox
import de.htwg.se.shutthebox.controller.controllerComponent.ControllerInterface


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

  def ingame(): Action[AnyContent] = Action {
    gameController.startGame(1, ai = false)
    Ok(views.html.ingame(gameController, errDice, errShut, errShutRoll))
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

}