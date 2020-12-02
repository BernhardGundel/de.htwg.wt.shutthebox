package controllers

import akka.actor._
import de.htwg.se.shutthebox.controller.controllerComponent.{CellShut, ControllerInterface, DiceRolled, Redone, Undone}

import scala.swing.Reactor

class ShutTheBoxWebSocketActor(out: ActorRef, gameController: ControllerInterface, shutTheBoxController: ShutTheBoxController) extends Actor with Reactor {
  listenTo(gameController)

  def receive = {
    case msg: String =>
      out ! (shutTheBoxController.controllerToJson)
      println("Sent Json to Client" + msg)
  }

  reactions += {
    case event: DiceRolled => sendJsonToClient
    case event: CellShut => sendJsonToClient
    case event: Undone => sendJsonToClient
    case event: Redone => sendJsonToClient
    // case event: ShowScoreBoard => printScoreBoard (???)
    // case event: All CellsShut => print("All cells shut! :-)") (???)
  }

  def sendJsonToClient = {
    println("Received event from Controller")
    out ! (shutTheBoxController.controllerToJson)
  }

}
