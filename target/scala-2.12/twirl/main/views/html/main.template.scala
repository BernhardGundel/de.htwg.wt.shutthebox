
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

object main extends _root_.play.twirl.api.BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,_root_.play.twirl.api.Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with _root_.play.twirl.api.Template2[String,Html,play.twirl.api.HtmlFormat.Appendable] {

  /*
 * This template is called from the `index` template. This template
 * handles the rendering of the page header and body tags. It takes
 * two arguments, a `String` for the title of the page and an `Html`
 * object to insert into the body of the page.
 */
  def apply/*7.2*/(title: String)(content: Html):play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*8.1*/("""
"""),format.raw/*9.1*/("""<!DOCTYPE html>
<html lang="en">
    <head>
        """),format.raw/*12.62*/("""
        """),format.raw/*13.9*/("""<title>"""),_display_(/*13.17*/title),format.raw/*13.22*/("""</title>
        <link rel="shortcut icon" type="image/png" href=""""),_display_(/*14.59*/routes/*14.65*/.Assets.versioned("images/favicon.png")),format.raw/*14.104*/("""">
        <script src=""""),_display_(/*15.23*/routes/*15.29*/.Assets.versioned("javascripts/hello.js")),format.raw/*15.70*/("""" type="text/javascript"></script>
    </head>
    <body>
        """),format.raw/*19.32*/("""
        """),_display_(/*20.10*/content),format.raw/*20.17*/("""
    """),format.raw/*21.5*/("""</body>
</html>
"""))
      }
    }
  }

  def render(title:String,content:Html): play.twirl.api.HtmlFormat.Appendable = apply(title)(content)

  def f:((String) => (Html) => play.twirl.api.HtmlFormat.Appendable) = (title) => (content) => apply(title)(content)

  def ref: this.type = this

}


              /*
                  -- GENERATED --
                  DATE: Thu Oct 22 13:31:20 CEST 2020
                  SOURCE: /Users/bernhardgundel/Documents/Studium/Semester_6/WebTechnologien/Workspace/de.htwg.wt.shutthebox/app/views/main.scala.html
                  HASH: 9cdc0c433e7a84cd91c2c9f9b81d578b49192cf5
                  MATRIX: 987->260|1111->291|1138->292|1218->397|1254->406|1289->414|1315->419|1409->486|1424->492|1485->531|1537->556|1552->562|1614->603|1708->759|1745->769|1773->776|1805->781
                  LINES: 26->7|31->8|32->9|35->12|36->13|36->13|36->13|37->14|37->14|37->14|38->15|38->15|38->15|41->19|42->20|42->20|43->21
                  -- GENERATED --
              */
          