
package views.html

import _root_.play.twirl.api.TwirlFeatureImports._
import _root_.play.twirl.api.TwirlHelperImports._
import _root_.play.twirl.api.Html
import _root_.play.twirl.api.JavaScript
import _root_.play.twirl.api.Txt
import _root_.play.twirl.api.Xml
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import play.api.mvc._
import play.api.data._

object index extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply/*1.2*/():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*2.1*/("""
"""),_display_(/*3.2*/main("HTWG Shut The Box")/*3.27*/ {_display_(Seq[Any](format.raw/*3.29*/("""

    """),format.raw/*5.5*/("""<h1>About Sudoku</h1>

""")))}),format.raw/*7.2*/("""
"""))
      }
    }
  }

  def render(): play.twirl.api.HtmlFormat.Appendable = apply()

  def f:(() => play.twirl.api.HtmlFormat.Appendable) = () => apply()

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Thu Oct 22 13:53:01 CEST 2020
                  SOURCE: /Users/bernhardgundel/Documents/Studium/Semester_6/WebTechnologien/Workspace/de.htwg.wt.shutthebox/app/views/index.scala.html
                  HASH: bc369daf4fa9214fb1f68842dcf3f06982e00d62
                  MATRIX: 722->1|818->4|845->6|878->31|917->33|949->39|1002->63
                  LINES: 21->1|26->2|27->3|27->3|27->3|29->5|31->7
                  -- GENERATED --
              */
          