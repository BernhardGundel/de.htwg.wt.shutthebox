package controllers

import akka.actor._
import de.htwg.se.shutthebox.controller.controllerComponent.{CellShut, ControllerInterface, DiceRolled, Redone, Undone}
import play.api.libs.json.JsValue

import scala.swing.Reactor

class ShutTheBoxWebSocketActor(out: ActorRef, gameController: ControllerInterface, shutTheBoxController: ShutTheBoxController) extends Actor with Reactor {
  listenTo(gameController)

  def receive: Actor.Receive = {
    case msg: String =>
      if (msg == "Send dice pls") {
        sendJsonToClientDiceRolled
      }
      out ! (shutTheBoxController.controllerJson.toString())
      println("Sent Json to Client" + msg)
  }

  reactions += {
    case event: DiceRolled => sendJsonToClientDiceRolled
    case event: CellShut => sendJsonToClient
    case event: Undone => sendJsonToClient
    case event: Redone => sendJsonToClient
    // case event: ShowScoreBoard => printScoreBoard (???)
    // case event: All CellsShut => print("All cells shut! :-)") (???)
  }

  def sendJsonToClientDiceRolled = {
    println("Received DiceRolled event from Controller")
    shutTheBoxController.rollDice
    out ! (shutTheBoxController.controllerJson.toString())
  }

  def sendJsonToClientCellShut = {
    println("Received CellShut event from Controller")
    out ! (shutTheBoxController.doShut())
  }

  def sendJsonToClientUndo = {
    println("Received Undo event from Controller")
    out ! (shutTheBoxController.undo)
  }

  def sendJsonToClientRedo = {
    println("Received Redo event from Controller")
    out ! (shutTheBoxController.redo)
  }

  def sendJsonToClient = {
    println("Received event from Controller")
    out ! (shutTheBoxController.controllerJson)
  }

}
