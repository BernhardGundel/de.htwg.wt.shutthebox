// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/pfau/02_Sonstiges/06_Github_Repos/17_HTWG_6_5_WebTec/de.htwg.wt.shutthebox/conf/routes
// @DATE:Thu Oct 22 13:21:29 CEST 2020

import play.api.mvc.Call


import _root_.controllers.Assets.Asset

// @LINE:7
package controllers {

  // @LINE:13
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:13
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
  
  }


}
