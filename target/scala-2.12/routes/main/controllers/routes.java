// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/pfau/02_Sonstiges/06_Github_Repos/17_HTWG_6_5_WebTec/de.htwg.wt.shutthebox/conf/routes
// @DATE:Thu Oct 22 13:21:29 CEST 2020

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.ReverseAssets Assets = new controllers.ReverseAssets(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseShutTheBoxController ShutTheBoxController = new controllers.ReverseShutTheBoxController(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.ReverseAssets Assets = new controllers.javascript.ReverseAssets(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseShutTheBoxController ShutTheBoxController = new controllers.javascript.ReverseShutTheBoxController(RoutesPrefix.byNamePrefix());
  }

}
