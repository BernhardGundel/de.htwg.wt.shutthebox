// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/bernhardgundel/Documents/Studium/Semester_6/WebTechnologien/Workspace/de.htwg.wt.shutthebox/conf/routes
// @DATE:Thu Oct 22 14:00:32 CEST 2020

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._

import play.api.mvc._

import _root_.controllers.Assets.Asset

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:7
  ShutTheBoxController_1: controllers.ShutTheBoxController,
  // @LINE:15
  Assets_0: controllers.Assets,
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:7
    ShutTheBoxController_1: controllers.ShutTheBoxController,
    // @LINE:15
    Assets_0: controllers.Assets
  ) = this(errorHandler, ShutTheBoxController_1, Assets_0, "/")

  def withPrefix(prefix: String): Routes = {
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, ShutTheBoxController_1, Assets_0, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""GET""", this.prefix, """controllers.ShutTheBoxController.shutthebox"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """help""", """controllers.ShutTheBoxController.help"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """ingame""", """controllers.ShutTheBoxController.ingame"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """assets/""" + "$" + """file<.+>""", """controllers.Assets.versioned(path:String = "/public", file:Asset)"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:7
  private[this] lazy val controllers_ShutTheBoxController_shutthebox0_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix)))
  )
  private[this] lazy val controllers_ShutTheBoxController_shutthebox0_invoker = createInvoker(
    ShutTheBoxController_1.shutthebox,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ShutTheBoxController",
      "shutthebox",
      Nil,
      "GET",
      this.prefix + """""",
      """""",
      Seq()
    )
  )

  // @LINE:9
  private[this] lazy val controllers_ShutTheBoxController_help1_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("help")))
  )
  private[this] lazy val controllers_ShutTheBoxController_help1_invoker = createInvoker(
    ShutTheBoxController_1.help,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ShutTheBoxController",
      "help",
      Nil,
      "GET",
      this.prefix + """help""",
      """""",
      Seq()
    )
  )

  // @LINE:11
  private[this] lazy val controllers_ShutTheBoxController_ingame2_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("ingame")))
  )
  private[this] lazy val controllers_ShutTheBoxController_ingame2_invoker = createInvoker(
    ShutTheBoxController_1.ingame,
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ShutTheBoxController",
      "ingame",
      Nil,
      "GET",
      this.prefix + """ingame""",
      """""",
      Seq()
    )
  )

  // @LINE:15
  private[this] lazy val controllers_Assets_versioned3_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("assets/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_versioned3_invoker = createInvoker(
    Assets_0.versioned(fakeValue[String], fakeValue[Asset]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "versioned",
      Seq(classOf[String], classOf[Asset]),
      "GET",
      this.prefix + """assets/""" + "$" + """file<.+>""",
      """ Map static resources from the /public folder to the /assets URL path""",
      Seq()
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:7
    case controllers_ShutTheBoxController_shutthebox0_route(params@_) =>
      call { 
        controllers_ShutTheBoxController_shutthebox0_invoker.call(ShutTheBoxController_1.shutthebox)
      }
  
    // @LINE:9
    case controllers_ShutTheBoxController_help1_route(params@_) =>
      call { 
        controllers_ShutTheBoxController_help1_invoker.call(ShutTheBoxController_1.help)
      }
  
    // @LINE:11
    case controllers_ShutTheBoxController_ingame2_route(params@_) =>
      call { 
        controllers_ShutTheBoxController_ingame2_invoker.call(ShutTheBoxController_1.ingame)
      }
  
    // @LINE:15
    case controllers_Assets_versioned3_route(params@_) =>
      call(Param[String]("path", Right("/public")), params.fromPath[Asset]("file", None)) { (path, file) =>
        controllers_Assets_versioned3_invoker.call(Assets_0.versioned(path, file))
      }
  }
}
