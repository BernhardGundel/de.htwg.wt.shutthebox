package controllers

import javax.inject._

import play.api.mvc._
import de.htwg.se.shutthebox.ShutTheBox


@Singleton
class ShutTheBoxController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  val gameController = ShutTheBox.controller
  def shutTheBoxAsText = gameController.toString

  /*def about= Action {
    Ok(views.html.index())
  }*/

  def shutthebox = Action {
    Ok(shutTheBoxAsText)
  }

}