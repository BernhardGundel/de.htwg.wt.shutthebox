// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/bernhardgundel/Documents/Studium/Semester_6/WebTechnologien/Workspace/de.htwg.wt.shutthebox/conf/routes
// @DATE:Thu Oct 22 14:00:32 CEST 2020

import play.api.routing.JavaScriptReverseRoute


import _root_.controllers.Assets.Asset

// @LINE:7
package controllers.javascript {

  // @LINE:15
  class ReverseAssets(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:15
    def versioned: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Assets.versioned",
      """
        function(file1) {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "assets/" + (""" + implicitly[play.api.mvc.PathBindable[Asset]].javascriptUnbind + """)("file", file1)})
        }
      """
    )
  
  }

  // @LINE:7
  class ReverseShutTheBoxController(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:7
    def shutthebox: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ShutTheBoxController.shutthebox",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + """"})
        }
      """
    )
  
    // @LINE:11
    def ingame: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ShutTheBoxController.ingame",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "ingame"})
        }
      """
    )
  
    // @LINE:9
    def help: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ShutTheBoxController.help",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "help"})
        }
      """
    )
  
  }


}
