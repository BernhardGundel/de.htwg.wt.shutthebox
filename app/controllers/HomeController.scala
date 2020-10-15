package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import de.htwg.se.shutthebox.ShutTheBox
import de.htwg.se.shutthebox.controller.controllerComponent.ControllerInterface

@Singleton
class HomeController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {
  val gameController: ControllerInterface = ShutTheBox.controller
  private val shutTheBoxAsText: String = gameController.toString()

  def about: Action[AnyContent] = Action {
    Ok(views.html.index())
  }

  def shutthebox: Action[AnyContent] = Action {
    Ok(shutTheBoxAsText)
  }

  def index(): Action[AnyContent] = Action { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }
}
