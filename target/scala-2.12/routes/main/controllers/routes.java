// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/bernhardgundel/Documents/Studium/Semester_6/WebTechnologien/Workspace/de.htwg.wt.shutthebox/conf/routes
// @DATE:Thu Oct 22 14:00:32 CEST 2020

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
