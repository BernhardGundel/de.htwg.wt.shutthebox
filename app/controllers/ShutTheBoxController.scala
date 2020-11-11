package controllers
import javax.inject._
import play.api.mvc._
import de.htwg.se.shutthebox.ShutTheBox
import de.htwg.se.shutthebox.controller.controllerComponent.ControllerInterface


@Singleton
class ShutTheBoxController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  val gameController: ControllerInterface = ShutTheBox.controller

  def shutthebox: Action[AnyContent] = Action {
    Ok(views.html.mainmenu())
  }

  def help: Action[AnyContent] = Action {
    Ok(views.html.index())
  }

  def ingame(): Action[AnyContent] = Action {
    gameController.startGame(1, ai = false)
    Ok(views.html.ingame(gameController))
  }

  def doShut(i:Int): Action[AnyContent] = Action {
    gameController.doShut(i)
    Ok(views.html.ingame(gameController))
  }

  def rollDice: Action[AnyContent] = Action {
    gameController.rollDice
    Ok(views.html.ingame(gameController))
  }

  def nextPlayer: Action[AnyContent] = Action {
    gameController.setCurrentPlayer()
    if (gameController.currentPlayerIndex < 2) {
      Ok(views.html.ingame(gameController))
    } else {
      val players = gameController.getPlayers
      Ok(views.html.scoreboard(players(0).score, players(1).score))
    }
  }

}