(function(e){function t(t){for(var o,s,a=t[0],c=t[1],u=t[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/frontend/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"061c":function(e,t,n){},"08d2":function(e,t,n){e.exports=n.p+"media/shut.e6080dab.wav"},"0c16":function(e,t,n){},"0dcb":function(e,t,n){},1667:function(e,t,n){e.exports=n.p+"media/btn.537cc325.mp3"},"171a":function(e,t,n){"use strict";n("5686")},"1d9a":function(e,t,n){"use strict";n("5887")},2395:function(e,t,n){},"25b7":function(e,t,n){},3230:function(e,t,n){"use strict";n("80a7")},5686:function(e,t,n){},5887:function(e,t,n){},"6db9":function(e,t,n){"use strict";n("25b7")},"6f0d":function(e,t,n){},"786c":function(e,t,n){"use strict";n("061c")},"7c55":function(e,t,n){"use strict";n("2395")},"80a7":function(e,t,n){},"8d45":function(e,t,n){"use strict";n("0c16")},"8ef6":function(e,t,n){"use strict";n("6f0d")},adee:function(e,t,n){"use strict";n("0dcb")},b7c5:function(e,t,n){"use strict";n("ce21")},c9c5:function(e,t,n){e.exports=n.p+"media/cheer.1ed8a77a.mp3"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("particles"),n("router-view")],1)},i=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"particles"},[n("div",{attrs:{id:"particles-js"}})])}],c=(n("572f"),{name:"particles",mounted:function(){this.initParticles()},methods:{initParticles:function(){window.particlesJS("particles-js",{particles:{number:{value:160,density:{enable:!0,value_area:800}},color:{value:"#595959"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}}),u=c,l=(n("8d45"),n("2877")),d=Object(l["a"])(u,s,a,!1,null,"ceb147c8",null),p=d.exports,h={name:"ShutTheBox",components:{particles:p}},m=h,f=(n("7c55"),Object(l["a"])(m,r,i,!1,null,null,null)),b=f.exports,g=n("9483");Object(g["a"])("".concat("/frontend/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var v=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"center"},[n("div",{staticClass:"header bop"},[e._v("SHUT THE BOX")]),n("div",{staticClass:"header-mirror bop2"},[e._v("SHUT THE BOX")]),n("br"),n("div",{staticClass:"menu-items-container"},[n("button",{staticClass:"text-center menu-button",on:{click:function(t){return e.startGame()}}},[e._v(" LOS GEHTS! ")]),n("br"),n("br"),e._m(0),n("br"),n("button",{staticClass:"menu-button",on:{click:function(t){return e.gotoRules()}}},[e._v("SPIELREGELN")]),n("br"),n("br"),n("button",{staticClass:"menu-button",class:e.getSoundEnabled,on:{click:function(t){return e.toggleSound()}}})])]),n("div",[n("button",{staticClass:"menu-button logout-btn",on:{click:function(t){return e.logout()}}},[e._v("LOGOUT")])])])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{staticClass:"scale-2",attrs:{type:"checkbox",id:"cb-matchfield",name:"fieldsize"}}),n("label",{attrs:{for:"cb-matchfield"}},[e._v("Großes Spielfeld")]),n("br"),n("input",{staticClass:"scale-2",attrs:{type:"checkbox",id:"cb-ai",name:"ai"}}),n("label",{attrs:{for:"cb-ai"}},[e._v("Gegen KI spielen")])])}],k=(n("2ca0"),n("96cf"),n("1da1")),y=o["a"].component("mainmenu",{components:{},props:{},mounted:function(){this.$store.commit("checkSignedIn"),this.$store.state.signedIn||this.$router.push("login")},methods:{startGame:function(){document.cookie;document.cookie.startsWith("authenticator=")||document.cookie.startsWith("OAuth2State")||this.$store.dispatch("startGame")},gotoRules:function(){this.$store.dispatch("sfxBtn"),this.$router.push("rules")},toggleSound:function(){this.$store.dispatch("toggleSound")},logout:function(){this.$store.dispatch("logout")}},asyncComputed:{getSoundEnabled:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getSoundEnabled");case 2:if(!t.sent){t.next=6;break}t.t0="sound-enabled-btn",t.next=7;break;case 6:t.t0="sound-disabled-btn";case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)})))()}}}),E=y,S=(n("b7c5"),Object(l["a"])(E,_,w,!1,null,"184a3fb7",null)),x=S.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h1",[e._v("SPIELREGELN")]),n("p",[e._v(" 'SHUT THE BOX' ist ein einfaches, aber sehr verlockendes Würfelspiel. Es kann als nettes Trinkspiel oder als kleines Gesellschaftsspiel für zwischendurch gespielt werden. ")]),e._m(0),e._m(1),e._m(2),e._m(3),n("p",[e._v('Im Hauptmenü kann entschieden werden, ob man gegen einen "echten" Gegner oder eine KI antreten möchte.')]),n("p",[e._v("Außerdem kann ausgewählt werden, ob man mit einem kleinen oder einem großen Spielfeld spielen möchte.")]),n("br"),n("button",{staticClass:"menu-button",on:{click:function(t){return e.gotoMenu()}}},[e._v("ZURÜCK ZUM HAUPTMENÜ")])])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Es besteht aus einem Würfelbrett mit 9 oder wahlweise 12 schwenkbaren Klappen, beschrieben mit den Ziffern 1 bis 9, bzw. 1 bis 12 und zwei Würfeln."),n("br"),e._v(" Zu Beginn des Spiels werden die Klappen in senkrechte Position gebracht."),n("br"),e._v(" Ziel ist es, alle Klappen umzuschwenken, um so eine möglichst geringe Teamsumme zu erreichen."),n("br"),e._v(" Das Umschwenken ist durch Würfeln und die damit erzielten Augenzahlen möglich. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" In dieser Version wird mit zwei Teams gespielt. TEAM 1 ist an der Reihe und muss würfeln. Es dürfen folgende Spielsteine umgedreht werden:"),n("br"),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rules-border"},[n("p",[e._v(" - Die Summe der Augenzahlen beider Würfel"),n("br"),e._v(" - Die Differenz der Augenzahlen der Würfel (grösserer Wert minus kleinerer Wert)"),n("br"),e._v(" - Das Produkt der einzelnen Augenzahlen"),n("br"),e._v(" - Die Division der Augenzahlen der einzelnen Würfel (grösserer Wert geteilt durch kleineren Wert ohne Rest)"),n("br"),e._v(" - Die einzelnen Augenzahlen beider Würfel"),n("br"),n("br"),e._v(" Nach jedem Umschwenken muss neu gewürfelt werden. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("br"),e._v(" Wenn das Team etwas würfelt, das in allen oben genannten Fällen schon umgeklappt ist, ist das TEAM 1 mit seinem Spielzug fertig und darf nicht mehr würfeln. "),n("br"),e._v(" Nun ist TEAM 2 an der Reihe. "),n("br"),n("br"),e._v(" Ziel des Spiels ist es, eine NIEDRIGERE Teamsumme zu erreichen als das Gegnerteam. Somit hat das Team mit der höheren Punktzahl verloren. Danach geht das Ganze von vorne los. :-) ")])}],$=o["a"].component("rules",{components:{},props:{},methods:{gotoMenu:function(){this.$store.dispatch("sfxBtn"),this.$router.push("/")}}}),P=$,T=(n("adee"),Object(l["a"])(P,C,O,!1,null,"eb84850c",null)),A=T.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"menu-button back-to-menu-button",on:{click:function(t){return e.backToMenu()}}}),n("undo-redo"),e.getAIEnabled&&"KI"==e.playername?n("div",{staticClass:"disabledMatchfield"}):e._e(),e.getAIEnabled&&"KI"==e.playername?n("div",{staticClass:"disabledUndoRedo"}):e._e(),n("div",{staticClass:"matchfield-container",attrs:{id:"shutthebox-game"}},[n("div",{staticClass:"text-large"},[n("u",[e._v(e._s(e.playername))]),e._v(" ist an der Reihe ")]),n("br"),n("matchfield",{attrs:{matchfield:e.matchfield}}),n("br"),n("dice")],1)],1)},R=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.matchfield,(function(e,t){return n("cell",{key:t,staticClass:"cell-flex cell",attrs:{index:t,isShut:e,isUpper:!0}})})),n("br"),n("br"),n("div",{staticClass:"matchfield-divider"}),n("br"),e._l(e.matchfield,(function(e,t){return n("cell",{key:"s"+t,staticClass:"cell-flex cell",attrs:{index:t,isShut:e,isUpper:!1}})}))],2)},N=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"cell-flex cell font-light",class:{hidden:e.isShut&&e.isUpper||!e.isShut&&!e.isUpper},attrs:{disabled:!e.isUpper},on:{click:function(t){return e.shut()}}},[e._v(" "+e._s(e.index+1)+" ")])])},j=[],D=(n("a9e3"),o["a"].component("cell",{components:{},props:{isUpper:Boolean,isShut:Boolean,index:Number},methods:{shut:function(){return this.checkCookie(),this.$store.dispatch("shut",this.index+1)},checkCookie:function(){document.cookie;document.cookie.startsWith("authenticator=")||document.cookie.startsWith("OAuth2State")||this.$router.push("login")}}})),z=D,L=(n("1d9a"),Object(l["a"])(z,W,j,!1,null,"192e90bf",null)),B=L.exports,U=o["a"].component("matchfield",{components:{Cell:B},props:{matchfield:Array}}),G=U,H=(n("171a"),Object(l["a"])(G,M,N,!1,null,"4e95b92b",null)),K=H.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("div",{staticClass:"alert alert-danger text-center",attrs:{id:"err",role:"alert"}}),n("div",{staticClass:"dice-container"},[n("div",{staticClass:"dice",attrs:{id:"die1"}}),n("div",{staticClass:"dice",attrs:{id:"die2"}}),n("br"),n("br"),n("div",{staticClass:"dice-container"},[n("button",{staticClass:"menu-button",on:{click:function(t){return e.rollDice()}}},[e._v("WÜRFELN!")]),n("br"),n("br"),n("div",{staticClass:"row justify-content-center"},[n("button",{staticClass:"btn btn-outline-dark btn-lg",on:{click:function(t){return e.nextPlayer()}}},[e._v("NÄCHSTER SPIELER")])])])])])},F=[],J=o["a"].component("dice",{components:{},props:{die1:Number,die2:Number},mounted:function(){this.$store.dispatch("resetErrorMsg")},methods:{rollDice:function(){return this.checkCookie(),this.$store.dispatch("rollDice")},nextPlayer:function(){return this.checkCookie(),this.$store.dispatch("sfxBtn"),this.$store.dispatch("nextPlayer")},checkCookie:function(){document.cookie;document.cookie.startsWith("authenticator=")||document.cookie.startsWith("OAuth2State")||this.$router.push("login")}}}),X=J,q=(n("786c"),Object(l["a"])(X,Z,F,!1,null,"07967f29",null)),V=q.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"undo-redo-button-container"},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return e.undo()}}},[e._v("UNDO")]),n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(t){return e.redo()}}},[e._v("REDO")])])},Q=[],ee=o["a"].component("undo-redo",{components:{},methods:{undo:function(){return this.checkCookie(),this.$store.dispatch("undo")},redo:function(){return this.checkCookie(),this.$store.dispatch("redo")},checkCookie:function(){document.cookie;document.cookie.startsWith("authenticator=")||document.cookie.startsWith("OAuth2State")||this.$router.push("login")}}}),te=ee,ne=(n("8ef6"),Object(l["a"])(te,Y,Q,!1,null,"5190157e",null)),oe=ne.exports,re={name:"Ingame",components:{Matchfield:K,Dice:V,UndoRedo:oe},mounted:function(){document.cookie;document.cookie.startsWith("authenticator=")||document.cookie.startsWith("OAuth2State")||this.$router.push("login")},methods:{backToMenu:function(){this.$store.dispatch("sfxBtn"),this.$router.push("/")}},computed:{matchfield:function(){return this.$store.state.controller.field}},asyncComputed:{playername:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getCurrentPlayerName");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getAIEnabled:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.state.controller.ai;case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}},ie=re,se=(n("6db9"),Object(l["a"])(ie,I,R,!1,null,"abb403e0",null)),ae=se.exports,ce=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"center text-center"},[e._m(0),o("br"),o("div",[o("div",{staticClass:"inline font-medium"},[e._v("Spieler 1: "+e._s(e.scorePlayer1)+" Punkte")]),e.scorePlayer1<e.scorePlayer2?o("img",{staticClass:"inline crown",attrs:{src:n("dc6b"),width:"40rem"}}):e._e()]),o("br"),o("div",[o("div",{staticClass:"inline font-medium"},[e._v("Spieler 2: "+e._s(e.scorePlayer2)+" Punkte "),e.getAIEnabled()?o("div",{staticClass:"inline"},[e._v("(KI)")]):e._e()]),e.scorePlayer1>e.scorePlayer2?o("img",{staticClass:"inline crown",attrs:{src:n("dc6b"),width:"40rem"}}):e._e()]),o("br"),o("br"),o("br"),e.scorePlayer1==e.scorePlayer2?o("div",{staticClass:"font-medium"},[e._v(e._s(e.playAaw())+" Das Spiel endet unentschieden :-(")]):e._e(),e.scorePlayer1<e.scorePlayer2?o("div",{staticClass:"font-medium"},[e._v(e._s(e.playCheer())+" "),o("u",[e._v("Spieler 1 gewinnt!")])]):e._e(),e.scorePlayer1>e.scorePlayer2?o("div",{staticClass:"font-medium"},[e._v(e._s(e.playCheer())+" "),o("u",[e._v("Spieler 2 gewinnt!")])]):e._e(),o("br"),o("br"),o("br"),o("button",{staticClass:"menu-button",on:{click:function(t){return e.gotoMenu()}}},[e._v("ZURÜCK ZUM HAUPTMENÜ")])])},ue=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"font-large"},[n("u",[e._v("GAME OVER!")])])}],le={name:"Scoreboard",methods:{gotoMenu:function(){this.$store.dispatch("sfxBtn"),this.$router.push("/")},playCheer:function(){this.$store.dispatch("sfxCheer")},playAaw:function(){this.$store.dispatch("sfxAaw")},getAIEnabled:function(){return this.$store.state.controller.ai}},computed:{scorePlayer1:function(){return this.$store.state.controller.score.scorePlayer1},scorePlayer2:function(){return this.$store.state.controller.score.scorePlayer2}}},de=le,pe=(n("3230"),Object(l["a"])(de,ce,ue,!1,null,"78c1b916",null)),he=pe.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Login")]),n("form",{attrs:{id:"loginform"}},[e._v(" E-Mail-Adresse: "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"player@shutthebox.de"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("br"),e._v(" Passwort: "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("br"),n("button",{on:{click:function(t){return e.login()}}},[e._v("LOGIN")])]),n("button",{on:{click:function(t){return e.googleLogin()}}},[e._v("LOGIN MIT GOOGLE")]),n("br"),n("br"),e._v(" Noch keinen Account? "),n("br"),n("button",{on:{click:function(t){return e.gotoSignup()}}},[e._v("REGISTRIEREN!")])])},fe=[],be={data:function(){return{email:"",password:"",emailRules:[function(e){return!!e||"Required."},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}]}},mounted:function(){document.cookie;(document.cookie.startsWith("authenticator=")||document.cookie.startsWith("OAuth2State"))&&this.$router.push("/")},methods:{login:function(){var e=new FormData;e.append("email",this.email),e.append("password",this.password),this.$store.dispatch("login",e)},googleLogin:function(){this.$store.dispatch("googleLogin")},gotoSignup:function(){this.$router.push("signup")}}},ge=be,ve=Object(l["a"])(ge,me,fe,!1,null,null,null),_e=ve.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Registrieren")]),n("form",{attrs:{id:"signupform"}},[e._v(" Vorname: "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],attrs:{placeholder:"Max"},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}}),n("br"),n("br"),e._v(" Nachname: "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],attrs:{placeholder:"Mustermann"},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}}),n("br"),n("br"),e._v(" E-Mail-Adresse: "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"player@shutthebox.de"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("br"),e._v(" Passwort: "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{on:{click:function(t){return e.register()}}},[e._v("ANMELDEN")])])},ke=[],ye={data:function(){return{firstname:"",lastname:"",email:"",password:"",emailRules:[function(e){return!!e||"Required."},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}]}},mounted:function(){document.cookie;(document.cookie.startsWith("authenticator=")||document.cookie.startsWith("OAuth2State"))&&this.$router.push("/")},methods:{register:function(){var e=new FormData;e.append("firstName",this.firstname),e.append("lastName",this.lastname),e.append("email",this.email),e.append("password",this.password),this.$store.dispatch("register",e)}}},Ee=ye,Se=Object(l["a"])(Ee,we,ke,!1,null,null,null),xe=Se.exports;o["a"].use(v["a"]);var Ce=[{path:"/",name:"MainMenu",component:x},{path:"/rules",name:"Rules",component:A},{path:"/ingame",name:"Ingame",component:ae},{path:"/scoreboard",name:"Scoreboard",component:he},{path:"/login",name:"Login",component:_e},{path:"/signup",name:"Signup",component:xe}],Oe=new v["a"]({mode:"hash",base:"/frontend/",routes:Ce}),$e=Oe,Pe=(n("d3b7"),n("25f0"),n("8a79"),n("2f62")),Te=n("1157"),Ae=n.n(Te),Ie=n("bc3a"),Re=n.n(Ie);o["a"].use(Pe["a"]);var Me="shuttheboxserver.herokuapp.com",Ne=new WebSocket("wss://"+Me+"/websocket"),We={withCredentials:!0,headers:{"Content-Type":"application/json",Accept:"application/json"},crossdomain:!0},je=new Audio(n("08d2")),De=new Audio(n("dab3")),ze=new Audio(n("1667")),Le=new Audio(n("c9c5")),Be=new Audio(n("ee25")),Ue={controller:{ai:!1,bigMatchfield:!1,field:[],dice:{die1:0,die2:0},score:{scorePlayer1:0,scorePlayer2:0},turn:0,error:""},enableSound:!0,cookie:document.cookie},Ge=new Pe["a"].Store({state:Ue,mutations:{SET_CONTROLLER:function(e,t){e.controller=t},SET_COOKIE:function(e,t){e.cookie=t}},actions:{checkSignedIn:function(e){var t=e.commit;Re.a.get("https://"+Me+"/checkSignedIn",We).then((function(e){console.log(e.data),"You are successfully signed in."===e.data&&t("SET_COOKIE",document.cookie)})).catch((function(e){console.log("Du bist nicht eingeloggt.")}))},login:function(e,t){var n=e.commit;Re.a.post("https://"+Me+"/signIn",t,Ae.a.extend(We,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then((function(e){n("SET_COOKIE",document.cookie),$e.push("/")})).catch((function(e){console.log("Da ist etwas schief gelaufen.")}))},logout:function(e){var t=e.commit;Re.a.get("https://"+Me+"/signOut",We).then((function(){$e.push("/login"),t("SET_COOKIE",document.cookie)})).catch((function(){console.log("Something went wrong")}))},register:function(e,t){e.commit;Re.a.post("https://"+Me+"/signUp",t,Ae.a.extend(We,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then(function(){$e.push("/login")}.bind(this)).catch((function(){console.log("Something went wrong")}))},googleLogin:function(e){var t=e.commit;Re.a.get("https://"+Me+"/authenticate/google",Ae.a.extend(We,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then((function(e){t("SET_COOKIE",document.cookie)})).catch((function(){console.log("Something went wrong")}))},startGame:function(e){var t=e.dispatch;if(Ne.readyState===Ne.OPEN){var n=document.getElementById("cb-matchfield"),o=document.getElementById("cb-ai"),r=n.checked,i=o.checked;Ne.send(JSON.stringify({ai:i,bigMatchfield:r})),$e.push("ingame")}else location.reload();t("sfxBtn")},shut:function(e,t){var n=e.dispatch;Ne.send(JSON.stringify({index:t})),n("sfxShut")},rollDice:function(e){var t=e.dispatch;Ne.send("rollDice"),Ge.dispatch("updateDice"),t("sfxRoll")},updateDice:function(){if(this.state.controller.dice){var e=document.getElementById("die1"),t=document.getElementById("die2");e&&t&&(e.innerHTML=this.state.controller.dice.die1.toString(),t.innerHTML=this.state.controller.dice.die2.toString())}},resetErrorMsg:function(){var e=document.getElementById("err");e&&(e.style.visibility="hidden")},updateErrorMsg:function(e){var t=e.dispatch,n=this.state.controller.error;if(n){var o=document.getElementById("err");o&&(n.length<=1?t("resetErrorMsg"):("Dice roll not allowed!"==n?o.innerHTML="Würfeln ist noch nicht erlaubt!":"This shut is not allowed"==n?o.innerHTML="Dieser Spielzug ist nicht erlaubt":"Please roll the dice first!"==n&&(o.innerHTML="Bitte zuerst würfeln!"),o.style.visibility="visible"))}},nextPlayer:function(e){e.dispatch;Ne.send("nextPlayer")},getCurrentPlayerName:function(){return 0==Ge.state.controller.turn?"Spieler 1":Ge.state.controller.ai?"KI":"Spieler 2"},undo:function(e){var t=e.dispatch;t("sfxBtn"),Ne.send("undo")},redo:function(e){var t=e.dispatch;t("sfxBtn"),Ne.send("redo")},sfxShut:function(){Ge.state.enableSound&&je.play()},sfxRoll:function(){Ge.state.enableSound&&De.play()},sfxBtn:function(){Ge.state.enableSound&&ze.play()},sfxCheer:function(){Ge.state.enableSound&&Le.play()},sfxAaw:function(){Ge.state.enableSound&&Be.play()},toggleSound:function(){Ge.state.enableSound=!Ge.state.enableSound},getSoundEnabled:function(){return Ge.state.enableSound}},getters:{matchfield:function(e){return e.controller.field}}});Ne.onopen=function(){console.log("Connected to Websocket")},Ne.onclose=function(){console.log("Connection with Websocket Closed!"),(document.cookie.startsWith("authenticator=")||document.cookie.startsWith("OAuth2State"))&&location.href.endsWith("/ingame")&&location.reload()},Ne.onerror=function(e){console.log("Error in Websocket Occured: ",e)},Ne.onmessage=function(e){if("string"===typeof e.data){var t=JSON.parse(e.data);console.log(t),Ge.commit("SET_CONTROLLER",t),Ge.dispatch("updateDice"),Ge.dispatch("updateErrorMsg"),Ge.state.controller.turn>1&&($e.currentRoute.path.endsWith("scoreboard")||$e.push("scoreboard"))}};var He=Ge,Ke=(n("4989"),n("ab8b"),n("3003"));o["a"].config.productionTip=!1,o["a"].use(Ke["a"]),new o["a"]({router:$e,store:He,render:function(e){return e(b)}}).$mount("#app")},ce21:function(e,t,n){},dab3:function(e,t,n){e.exports=n.p+"media/rollDice.c902feb2.mp3"},dc6b:function(e,t,n){e.exports=n.p+"img/crown.f5921019.svg"},ee25:function(e,t,n){e.exports=n.p+"media/aaw.fc4c6bc0.mp3"}});
//# sourceMappingURL=app.b259a5e0.js.map