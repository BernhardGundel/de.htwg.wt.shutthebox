// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/bernhardgundel/Documents/Studium/Semester_6/WebTechnologien/Workspace/de.htwg.wt.shutthebox/conf/routes
// @DATE:Thu Oct 22 14:00:32 CEST 2020

import play.api.mvc.Call


import _root_.controllers.Assets.Asset

// @LINE:7
package controllers {

  // @LINE:15
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:15
    def versioned(file:Asset): Call = {
      implicit lazy val _rrc = new play.core.routing.ReverseRouteContext(Map(("path", "/public"))); _rrc
      Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[play.api.mvc.PathBindable[Asset]].unbind("file", file))
    }
  
  }

  // @LINE:7
  class ReverseShutTheBoxController(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:7
    def shutthebox(): Call = {
      
      Call("GET", _prefix)
    }
  
    // @LINE:11
    def ingame(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "ingame")
    }
  
    // @LINE:9
    def help(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "help")
    }
  
  }


}
