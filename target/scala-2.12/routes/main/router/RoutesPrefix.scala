// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/pfau/02_Sonstiges/06_Github_Repos/17_HTWG_6_5_WebTec/de.htwg.wt.shutthebox/conf/routes
// @DATE:Thu Oct 22 13:21:29 CEST 2020


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
