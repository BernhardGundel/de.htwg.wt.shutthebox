package controllers

import akka.actor._
import de.htwg.se.shutthebox.controller.controllerComponent.ControllerInterface

object ShutTheBoxWebSocketActorFactory {
  def create(out: ActorRef, gameController: ControllerInterface, shutTheBoxController: ShutTheBoxController) = {
    Props(new ShutTheBoxWebSocketActor(out, gameController, shutTheBoxController))
  }

}
