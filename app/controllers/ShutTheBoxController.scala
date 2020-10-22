package controllers
import javax.inject._
import play.api.mvc._
import de.htwg.se.shutthebox.ShutTheBox


@Singleton
class ShutTheBoxController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  val gameController = ShutTheBox.controller
  val tui = ShutTheBox.tui
  def shutTheBoxAsText = gameController.printOutput
  def headerAsText = tui.printHeader()
  def helpAsText = tui.printRules()

  def shutthebox = Action {
    Ok(headerAsText)
  }

  def help = Action {
    Ok(helpAsText)
  }

  def ingame = Action {
    gameController.startGame(1, false)
    val startGameAsText = gameController.printOutput
    gameController.rollDice
    val diceAsText = gameController.printOutput

    val ingame = startGameAsText + diceAsText

    Ok(ingame)
  }

}