// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/bernhardgundel/Documents/Studium/Semester_6/WebTechnologien/Workspace/de.htwg.wt.shutthebox/conf/routes
// @DATE:Thu Oct 22 14:00:32 CEST 2020


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
