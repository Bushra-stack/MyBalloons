(function(t){function e(e){for(var o,s,a=e[0],c=e[1],l=e[2],h=0,d=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/MyBalloons/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ca4":function(t,e,n){},1:function(t,e){},"1de5":function(t,e,n){},2:function(t,e){},"2ae3":function(t,e,n){},"2d7b":function(t,e,n){},3:function(t,e){},"3dd6":function(t,e,n){},4:function(t,e){},"49b5":function(t,e,n){"use strict";n("c5ce")},"4dfd":function(t,e,n){},5:function(t,e){},"50af":function(t,e,n){"use strict";n("fffd")},5255:function(t,e,n){"use strict";n("4dfd")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("WebGazer",{on:{update:t.onUpdate}}),n("GazeCloud",{on:{update:t.onUpdate}}),"StartMenu"===t.stateMachinegetter?n("StartMenu",{attrs:{xWG:t.x_wg,yWG:t.y_wg}}):t._e(),"GameStarted"===t.stateMachinegetter||"GamePaused"===t.stateMachinegetter?n("section",[n("Game",{attrs:{xWG:t.x_wg,yWG:t.y_wg}})],1):t._e(),"SettingSelected"===t.stateMachinegetter?n("section",[n("GameSettings",{attrs:{xWG:t.x_wg,yWG:t.y_wg}})],1):t._e(),"beforeCali"===t.stateMachinegetter?n("beforeCali"):t._e(),"Calibration"===t.stateMachinegetter?n("Calibration"):t._e(),"afterCali"===t.stateMachinegetter?n("afterCali"):t._e(),"HighScore"===t.stateMachinegetter?n("section",[n("HighScore",{attrs:{xWG:t.x_wg,yWG:t.y_wg}})],1):t._e()],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},a=[],c=(n("96cf"),n("1da1")),l=n("06f5"),u={name:"WebGazer",props:{},data:function(){return{x:0,y:0}},created:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},computed:{eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter}},methods:{integrate:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,window.applyCalmanFilter=!0,window.saveDataAccrossSessions=!0,l["a"].params.showVideoPreview=!0,e.next=6,l["a"].setRegression("ridge").setGazeListener((function(t){t&&(n.x=t.x,n.y=t.y,n.$emit("update",{x:t.x,y:t.y}))})).begin();case 6:l["a"].showFaceOverlay(!0),l["a"].showPredictionPoints(!0);case 8:case"end":return e.stop()}}),e)})))()}},watch:{eyetrackinggetter:function(t){"WebGazer"===t?this.integrate():(window.applyKalmanFilter=!1,l["a"].params.showVideoPreview=!1,l["a"].showPredictionPoints(!1),l["a"].showFaceOverlay(!1),l["a"].showFaceFeedbackBox(!1),l["a"].end(),console.log("End of eyetracking"))}}},h=u,d=n("2877"),g=Object(d["a"])(h,s,a,!1,null,"7f8dc2c6",null),m=g.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"block",position:"fixed","z-index":"1000",left:"-5px",top:"-5px",background:"red","border-radius":"100%",opacity:"0.7",width:"10px",height:"10px"},style:t.style,attrs:{id:"gazeCloudDot"}})},p=[],y={name:"GazeCloud",data:function(){return{x:0,y:0}},computed:{style:function(){return console.log(this.x,this.y),{transform:"translate3d("+this.x+"px, "+this.y+"px, 0px)"}},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter}},created:function(){},methods:{integrate:function(){if(window.GazeCloudAPI){var t=this;window.GazeCloudAPI.StartEyeTracking(),window.GazeCloudAPI.UseClickRecalibration=!0,window.GazeCloudAPI.OnCalibrationComplete=function(){console.log("Calibration complete"),window.GazeCloudAPI.OnResult=function(e){console.log("DATA: ",e),t.x=e.GazeX,t.y=e.GazeY,t.$emit("update",{x:e.GazeX,y:e.GazeY})}}}}},watch:{eyetrackinggetter:function(t){"GazeCloud"===t?this.integrate():window.GazeCloudAPI.StopEyeTracking()}}},b=y,v=Object(d["a"])(b,f,p,!1,null,"59185b66",null),C=v.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"startMenu",attrs:{refs:"startMenu"}},[n("h1",[t._v("Welcome to My Balloons")]),t.isSettingOn?t._e():n("button",{attrs:{id:"Play_Now"},on:{click:t.startGame}},[t._v("Play Now")]),t.isSettingOn?t._e():n("button",{attrs:{id:"Settings"},on:{click:t.goToSettings}},[t._v("Settings")]),t.isSettingOn?t._e():n("button",{attrs:{id:"High_Score"},on:{click:t.showHighScore}},[t._v("High Score")])])},k=[],w=(n("99af"),n("a9e3"),n("ac1f"),n("1276"),n("3835")),S={name:"StartMenu",props:{xWG:{type:Number,default:0},yWG:{type:Number,default:0}},data:function(){return{startCounter:0,settingCounter:0,scoreCounter:0}},methods:{startGame:function(){this.$store.commit("changeStateMachine","GameStarted")},goToSettings:function(){this.$store.commit("changeStateMachine","SettingSelected")},showHighScore:function(){this.$store.commit("changeStateMachine","HighScore")}},computed:{isSettingOn:function(){return this.$store.getters.isSettingsOn},xWG_yWG:function(){return"".concat(this.xWG,"|").concat(this.yWG)},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter},timeForEyetrackinggetter:function(){return this.$store.getters.timeForEyetrackingGetter},btn1:function(){var t=document.getElementById("Play_Now");return t.getBoundingClientRect()},btn2:function(){var t=document.getElementById("Settings");return t.getBoundingClientRect()},btn3:function(){var t=document.getElementById("High_Score");return t.getBoundingClientRect()}},watch:{xWG_yWG:function(t){var e=t.split("|"),n=Object(w["a"])(e,2),o=n[0],i=n[1];o<=this.btn1.right&&o>=this.btn1.left&&i<=this.btn1.bottom&&i>=this.btn1.top&&(console.log("play now"),this.startCounter++,this.settingCounter--,this.scoreCounter--),o<=this.btn2.right&&o>=this.btn2.left&&i<=this.btn2.bottom&&i>=this.btn2.top&&(console.log("Settings"),this.startCounter--,this.settingCounter++,this.scoreCounter--),o<=this.btn3.right&&o>=this.btn3.left&&i<=this.btn3.bottom&&i>=this.btn3.top&&(console.log("High_Score"),this.startCounter--,this.settingCounter--,this.scoreCounter++),document.getElementById("Play_Now").style.opacity="".concat(1-this.startCounter/(this.timeForEyetrackinggetter+2)),document.getElementById("Settings").style.opacity="".concat(1-this.settingCounter/(this.timeForEyetrackinggetter+2)),document.getElementById("High_Score").style.opacity="".concat(1-this.scoreCounter/(this.timeForEyetrackinggetter+2)),this.startCounter>=this.timeForEyetrackinggetter&&(this.startCounter=0,this.settingCounter=0,this.scoreCounter=0,this.startGame()),this.settingCounter>=this.timeForEyetrackinggetter&&(this.startCounter=0,this.settingCounter=0,this.scoreCounter=0,this.goToSettings()),this.scoreCounter>=this.timeForEyetrackinggetter&&(this.startCounter=0,this.settingCounter=0,this.scoreCounter=0,this.showHighScore())}}},_=S,B=(n("e0fc"),Object(d["a"])(_,G,k,!1,null,"519c7004",null)),x=B.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["GameStarted"===t.stateMachinegetter?n("div",[n("button",{attrs:{id:"pauseButton"},on:{click:t.pauseTheGame}},[t._v("Pause")]),t._l(t.list,(function(e,o){return n("Balloon",{key:o,attrs:{x:e.x,y:e.y,color:e.color,index:o},on:{"balloon-click":t.onBalloonClick,updatePos:function(e){return t.updateY(o)}}})})),t._l(t.listOfBlackBalloon,(function(e,o){return n("BlackBalloon",{key:100*(o+1),attrs:{x:e.x,y:e.y,color:e.color,index:100*(o+1)},on:{"balloon-click":t.onBlackBalloonClick,updatePosBlack:function(e){return t.updateYBlack(o)}}})})),n("p",{attrs:{id:"game-score"}},[t._v("Current Score "+t._s(t.scoregetter))]),n("p",{attrs:{id:"player-lifes"}},[t._v("Current Lives "+t._s(t.livesgetter))])],2):t._e(),"GamePaused"===t.stateMachinegetter?n("button",{attrs:{id:"continueButton"},on:{click:t.continuePlaying}},[t._v("Continue ")]):t._e(),"GamePaused"===t.stateMachinegetter?n("button",{attrs:{id:"stopButton"},on:{click:t.stopTheGame}},[t._v("Stop")]):t._e(),this.gameOvergetter?n("GameOver",{attrs:{xWG_GameOver:t.xWG,yWG_GameOver:t.yWG},on:{updateLists:t.update2Lists}}):t._e()],1)},E=[],$=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"balloon",staticClass:"balloon",style:{color:t.color,background:t.color,left:t.x+"px",bottom:t.y+"px"},attrs:{id:t.index},on:{click:function(e){return t.$emit("balloon-click",t.index)}}})}),W=[],M={name:"Balloon",props:{x:{type:Number,default:0},y:{type:Number,default:0},color:{type:String,default:"red"},index:{type:Number,required:!0}},data:function(){return{intervalID:0,animationFrameId:0,clockwise:!0}},computed:{speedgetter:function(){return this.$store.getters.speedGetter}},methods:{update:function(t){this.$emit("updatePos",t)}},created:function(){this.intervalID=window.setInterval(this.update,this.speedgetter)},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){window.clearInterval(this.intervalID)}},I=M,L=(n("d6c9"),Object(d["a"])(I,$,W,!1,null,"1e369a92",null)),F=L.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"blackBalloon",staticClass:"blackBalloon",style:{background:t.color,left:t.x+"px",bottom:t.y+"px"},attrs:{id:t.index},on:{click:function(e){return t.$emit("balloon-click",t.index)}}})},H=[],z={name:"BlackBalloon",props:{x:{type:Number,default:0},y:{type:Number,default:0},color:{type:String,default:"black"},index:{type:Number,required:!0}},data:function(){return{intervalID:0,animationFrameId:0,clockwise:!0}},methods:{update:function(t){this.$emit("updatePosBlack",t)}},computed:{speedgetter:function(){return this.$store.getters.speedGetter}},created:function(){this.intervalID=window.setInterval(this.update,this.speedgetter)},beforeDestroy:function(){window.clearInterval(this.intervalID)}},j=z,N=(n("7341"),Object(d["a"])(j,P,H,!1,null,"289a1681",null)),T=N.exports;function D(){console.log("hello")}function R(){console.log("bye")}function A(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)}var Y=["yellow","skyblue","maroon","fuchsia","orange","cyan","pink","green","blue","brown","chartreuse","indigo","DarkSlateBlue","Coral","Chocolate","Gold","Crimson","MediumBlue","SlateGray","Magenta","FireBrick","DarkSalmon","SeaGreen","SpringGreen","SteelBlue","CornflowerBlue","PowderBlue","Moccasin","Orchid","Aqua"],V=["#CC79A7","#D55E00","#0072B2","#F0E442","#009E73","#56B4E9","#E69F00","#766A6A"],U={hello:D,bye:R,random:A,colorList:Y,accessibleColorList:V},J=n("890b"),q=n.n(J),X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"foo"},[n("h1",{attrs:{id:"gameOverH1"}},[t._v(" Game Over! ")]),n("div",{attrs:{id:"center"}},[n("button",{attrs:{id:"stopButtonG"},on:{click:t.stopTheGameG}},[t._v("Upss!")])])])])},K=[],Q={name:"GameOver",props:{xWG_GameOver:{type:Number,default:0},yWG_GameOver:{type:Number,default:0}},data:function(){return{stopCounterG:0}},created:function(){},methods:{stopTheGameG:function(){this.$store.commit("resetScore"),this.$store.commit("resetLives"),this.$store.commit("end_startGame",{value:!1}),this.$store.commit("changeStateMachine","StartMenu")}},computed:{xWG_yWG_GameOver:function(){return"".concat(this.xWG_GameOver,"|").concat(this.yWG_GameOver)},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter},timeForEyetrackinggetter:function(){return this.$store.getters.timeForEyetrackingGetter},btnStopG:function(){var t=document.getElementById("stopButtonG");return t.getBoundingClientRect()}},watch:{xWG_yWG_GameOver:function(t){var e=t.split("|"),n=Object(w["a"])(e,2),o=n[0],i=n[1];o<=this.btnStopG.right&&o>=this.btnStopG.left&&i<=this.btnStopG.bottom&&i>=this.btnStopG.top&&this.stopCounterG++,document.getElementById("stopButtonG").style.opacity="".concat(1-this.stopCounterG/(this.timeForEyetrackinggetter+2)),this.stopCounterG>=this.timeForEyetrackinggetter&&(this.stopCounterG=0,this.stopTheGameG())}}},Z=Q,tt=(n("5255"),Object(d["a"])(Z,X,K,!1,null,null,null)),et=tt.exports;o["a"].use(q.a);var nt={name:"Game",components:{Balloon:F,BlackBalloon:T,GameOver:et},props:{xWG:{type:Number,default:0},yWG:{type:Number,default:0}},data:function(){return{pauseCounter:0,continueCounter:0,stopCounter:0,state:"stop",list:[{x:50,y:0,color:"#332288"}],listOfBlackBalloon:[{x:25,y:0,color:"#000000"}],colorList:U.colorList,newY:!0,windowWidth:window.innerWidth,windowHeight:window.innerHeight,oneTimeConfetti:!1}},created:function(){null==JSON.parse(window.localStorage.getItem("High Score"))?window.localStorage.setItem("High Score",this.scoregetter):this.highestScore=JSON.parse(window.localStorage.getItem("High Score")),this.accessibleColorgetter?(this.$store.commit("incrementCounterColorList"),this.colorList=U.accessibleColorList,console.log("accessible colorlist")):(this.colorList=U.colorList,console.log("still colorlist"));var t=0;for(t;t<this.amountgetter-1;t++)this.list.splice(this.list.length,0,{x:U.random(25,window.innerWidth-135),y:U.random(10,.55*window.innerHeight),color:this.colorList[this.counterColorListgetter]}),this.$store.commit("incrementCounterColorList");for(t=0,t;t<2;t++)this.listOfBlackBalloon.splice(this.listOfBlackBalloon.length,0,{x:U.random(25,window.innerWidth-135),y:U.random(10,.55*window.innerHeight),color:"#000000"});t=0,window.addEventListener("resize",this.resizeXY)},methods:{pauseTheGame:function(){this.$store.commit("changeStateMachine","GamePaused"),this.newY=!1},stopTheGame:function(){this.$store.commit("changeStateMachine","StartMenu"),this.list=[],this.listOfBlackBalloon=[],this.resetmyScore(),this.resetmyLives()},continuePlaying:function(){this.$store.commit("changeStateMachine","GameStarted")},incrementmyScore:function(){if(this.$store.commit("incrementScore"),JSON.parse(window.localStorage.getItem("High Score"))<this.scoregetter&&(window.localStorage.setItem("High Score",this.scoregetter),!1===this.oneTimeConfetti)){this.$confetti.start();var t=this.$confetti;alert("Yahoo! You reached an new high score!!"),setTimeout((function(){t.stop()}),5e3),this.oneTimeConfetti=!0}},decrementmyLives:function(){this.$store.commit("decrementLives")},resetmyScore:function(){this.$store.commit("resetScore")},onBalloonClick:function(t){this.list.splice(t,1),this.incrementmyScore()},onBlackBalloonClick:function(t){this.listOfBlackBalloon.splice(t/100-1,1),this.decrementmyLives(),this.listOfBlackBalloon.splice(this.listOfBlackBalloon.length,0,{x:U.random(25,window.innerWidth-135),y:U.random(10,.55*window.innerHeight),color:"#000000"})},resetmyLives:function(){this.$store.commit("resetLives")},updateY:function(t){this.list.length==this.amountgetter?this.list[t].y>window.innerHeight+125?this.list[t].y=10:this.list[t].y=this.list[t].y+2:this.updateList()},updateYBlack:function(t){this.listOfBlackBalloon[t].y>window.innerHeight+125?this.listOfBlackBalloon[t].y=10:this.listOfBlackBalloon[t].y=this.listOfBlackBalloon[t].y+4},updateList:function(){this.list.length<this.amountgetter&&(this.list.splice(this.list.length,0,{x:U.random(25,window.innerWidth-135),y:U.random(10,.55*window.innerHeight),color:this.colorList[this.counterColorListgetter]}),this.$store.commit("incrementCounterColorList"))},resizeXY:function(){console.log("resize");var t=window.innerWidth/this.windowWidth;this.windowWidth=window.innerWidth;var e=window.innerHeight/this.windowHeight;this.windowHeight=window.innerHeight;var n=0;for(n;n<this.list.length;n++)this.list[n].x=this.list[n].x*t,this.list[n].y=this.list[n].y*e;var o=0;for(o;o<this.listOfBlackBalloon.length;o++)this.listOfBlackBalloon[o].x=this.listOfBlackBalloon[o].x*t,this.listOfBlackBalloon[o].y=this.listOfBlackBalloon[o].y*e},update2Lists:function(){this.list=[],this.listOfBlackBalloon=[]}},computed:{stateMachinegetter:function(){return this.$store.getters.stateMachineGetter},amountgetter:function(){return this.$store.getters.amountGetter},scoregetter:function(){return this.$store.getters.scoreGetter},livesgetter:function(){return this.$store.getters.livesGetter},counterColorListgetter:function(){return this.$store.getters.counterColorListGetter},xWG_yWG:function(){return"".concat(this.xWG,"|").concat(this.yWG)},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter},timeForEyetrackinggetter:function(){return this.$store.getters.timeForEyetrackingGetter},accessibleColorgetter:function(){return this.$store.getters.accessibleColorGetter},gameOvergetter:function(){return this.$store.getters.gameOverGetter},btnPause:function(){var t=document.getElementById("pauseButton");return t.getBoundingClientRect()},btnContinue:function(){var t=document.getElementById("continueButton");return t.getBoundingClientRect()},btnStop:function(){var t=document.getElementById("stopButton");return t.getBoundingClientRect()}},watch:{livesgetter:function(t){t<=0?this.$store.commit("end_startGame",{value:!0}):this.$store.commit("end_startGame",{value:!1})},xWG_yWG:function(t){var e=t.split("|"),n=Object(w["a"])(e,2),o=n[0],i=n[1];if(this.livesgetter>0)if("GameStarted"===this.stateMachinegetter){var r=0,s=null,a=null;for(r;r<this.list.length;r++)s=document.getElementById("".concat(r)),a=s.getBoundingClientRect(),o<=a.right&&o>=a.left&&i<=a.bottom&&i>=a.top&&(console.log(this.list[r].color),this.list.splice(r,1),this.incrementmyScore());var c,l=0,u=null,h=null;for(l;l<this.listOfBlackBalloon.length;l++)c=100*(l+1),u=document.getElementById("".concat(c)),h=u.getBoundingClientRect(),o<=h.right&&o>=h.left&&i<=h.bottom&&i>=h.top&&(this.listOfBlackBalloon.splice(l,1),this.decrementmyLives(),this.listOfBlackBalloon.splice(this.listOfBlackBalloon.length,0,{x:U.random(25,window.innerWidth-135),y:U.random(10,.55*window.innerHeight),color:"#000000"}));o<=this.btnPause.right&&o>=this.btnPause.left&&i<=this.btnPause.bottom&&i>=this.btnPause.top&&this.pauseCounter++,document.getElementById("pauseButton").style.opacity="".concat(1-this.pauseCounter/(this.timeForEyetrackinggetter+2)),this.pauseCounter>=this.timeForEyetrackinggetter&&(this.pauseCounter=0,this.pauseTheGame())}else"GamePaused"===this.stateMachinegetter&&(o<=this.btnContinue.right&&o>=this.btnContinue.left&&i<=this.btnContinue.bottom&&i>=this.btnContinue.top&&(this.continueCounter++,this.stopCounter--),o<=this.btnStop.right&&o>=this.btnStop.left&&i<=this.btnStop.bottom&&i>=this.btnStop.top&&(this.continueCounter--,this.stopCounter++),document.getElementById("stopButton").style.opacity="".concat(1-this.stopCounter/(this.timeForEyetrackinggetter+2)),document.getElementById("continueButton").style.opacity="".concat(1-this.continueCounter/(this.timeForEyetrackinggetter+2)),this.continueCounter>=this.timeForEyetrackinggetter&&(this.continueCounter=0,this.stopCounter=0,this.continuePlaying()),this.stopCounter>=this.timeForEyetrackinggetter&&(this.continueCounter=0,this.stopCounter=0,this.stopTheGame()))},accessibleColorgetter:function(t){console.log(t),t?(this.colorList=U.accessibleColorList,console.log("accessible colorlist")):(this.colorList=U.colorList,console.log("still colorlist"))}}},ot=nt,it=(n("49b5"),Object(d["a"])(ot,O,E,!1,null,"181ae3b4",null)),rt=it.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"settings"}},[n("label",{attrs:{id:"speedLabel",for:"speed"}},[t._v("Speed")]),n("p",[t._v(t._s(t.speedOfInput))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.speedOfInput,expression:"speedOfInput"}],attrs:{type:"range",id:"speed",name:"speed",min:"1",max:"5",value:"3",step:"1"},domProps:{value:t.speedOfInput},on:{__r:function(e){t.speedOfInput=e.target.value}}}),n("label",{attrs:{for:"amount"}},[t._v("Amount")]),n("p",[t._v(t._s(t.amountValue))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amountValue,expression:"amountValue"}],attrs:{type:"range",id:"amount",name:"amount",min:"5",max:"30",value:"10",step:"1"},domProps:{value:t.amountValue},on:{__r:function(e){t.amountValue=e.target.value}}}),n("p",{attrs:{id:"control"}},[t._v("Control with:")]),n("label",{staticClass:"control",attrs:{for:"mouse"}},[t._v("Mouse")]),n("input",{staticClass:"control",attrs:{type:"radio",id:"mouse",name:"control",value:"mouse",checked:""}}),n("label",{staticClass:"control",attrs:{for:"webGazer"}},[t._v("WebGazer")]),n("input",{staticClass:"control",attrs:{type:"radio",id:"WebGazer",name:"control",value:"WebGazer"}}),n("label",{staticClass:"control",attrs:{for:"GazeCloud"}},[t._v("GazeCloud")]),n("input",{staticClass:"control",attrs:{type:"radio",id:"GazeCloud",name:"control",value:"GazeCloud"}}),n("br"),t._m(0),n("br"),n("button",{attrs:{id:"backButton"},on:{click:t.backFromSetting}},[t._v("Back")]),n("button",{attrs:{id:"saveButton"},on:{click:t.saveSetting}},[t._v("Save")])])},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{attrs:{for:"color"}},[t._v("Adapt Color "),n("input",{attrs:{type:"checkbox",id:"color",name:"color",value:"false"}})])}],ct={name:"settings",props:{xWG:{type:Number,default:0},yWG:{type:Number,default:0}},data:function(){return{saveCounter:0,backCounter:0,speedOfInput:4,amountValue:7}},methods:{backFromSetting:function(){this.$store.commit("changeStateMachine","StartMenu")},saveSetting:function(){var t="Default";document.getElementById("WebGazer").checked&&(t="WebGazer",this.$store.commit("changeStateMachine","beforeCali")),document.getElementById("GazeCloud").checked&&(t="GazeCloud"),console.log("eyetracking in game settings"+t),this.$store.commit("changeEyetracking",{value:t});var e=50-10*this.speedOfInput+20;this.$store.commit("saveSettings",{speed:e,amount:this.amountValue});var n=!!document.getElementById("color").checked;this.$store.commit("changeColorList",{value:n})}},computed:{xWG_yWG:function(){return"".concat(this.xWG,"|").concat(this.yWG)},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter},timeForEyetrackinggetter:function(){return this.$store.getters.timeForEyetrackingGetter},btnSave:function(){var t=document.getElementById("saveButton");return t.getBoundingClientRect()},btnBack:function(){var t=document.getElementById("backButton");return t.getBoundingClientRect()}},watch:{xWG_yWG:function(t){var e=t.split("|"),n=Object(w["a"])(e,2),o=n[0],i=n[1];o<=this.btnSave.right&&o>=this.btnSave.left&&i<=this.btnSave.bottom&&i>=this.btnSave.top&&(this.saveCounter++,this.backCounter--),o<=this.btnBack.right&&o>=this.btnBack.left&&i<=this.btnBack.bottom&&i>=this.btnBack.top&&(this.saveCounter--,this.backCounter++),document.getElementById("saveButton").style.opacity="".concat(1-this.saveCounter/(this.timeForEyetrackinggetter+2)),document.getElementById("backButton").style.opacity="".concat(1-this.backCounter/(this.timeForEyetrackinggetter+2)),this.saveCounter>=this.timeForEyetrackinggetter&&(this.saveCounter=0,this.backCounter=0,this.saveSetting()),this.backCounter>=this.timeForEyetrackinggetter&&(this.saveCounter=0,this.backCounter=0,this.backFromSetting())}}},lt=ct,ut=(n("a3cb"),Object(d["a"])(lt,st,at,!1,null,"38392e84",null)),ht=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"beforeCaliDiv"},[n("h1",[t._v(" Calibartion of WebGazer ")]),n("p",[t._v("To complete the calibration of WebGazer you need to do the following: ")]),t._m(0),n("button",{on:{click:t.cali}},[t._v(" start calibration!")])])},gt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Click three times on each box ")]),n("li",[t._v("While clicking on the boxes, you have to look simultaneously at the cursor ")])])}],mt={name:"beforeCali",methods:{cali:function(){this.$store.commit("changeStateMachine","Calibration")}}},ft=mt,pt=(n("8975"),Object(d["a"])(ft,dt,gt,!1,null,"1b9844d7",null)),yt=pt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-container"},t._l(t.list,(function(e,o){return n("CalibrationDiv",{key:o,attrs:{index:o,counter:e.counter},on:{"div-click":t.counterInc}})})),1)},vt=[],Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"CDiv",staticClass:"CDiv",attrs:{id:t.index},on:{click:function(e){return t.$emit("div-click",t.index)}}})},Gt=[],kt={name:"CalibrationDiv",props:{index:{type:Number,required:!0},counter:{type:Number,required:!0}}},wt=kt,St=(n("9c1e"),Object(d["a"])(wt,Ct,Gt,!1,null,"3a8b8823",null)),_t=St.exports,Bt={name:"Calibration",components:{CalibrationDiv:_t},data:function(){return{list:[{counter:0}]}},created:function(){var t=0;for(t;t<15;t++)this.list.splice(this.list.length,0,{counter:0})},methods:{counterInc:function(t){this.list[t].counter++},afterCali:function(){this.$store.commit("changeStateMachine","afterCali")}},watch:{list:{handler:function(t){console.log(t[1].counter);for(var e=0;e<16;e++)document.getElementById(e).style.opacity="".concat(.7+this.list[e].counter/10);t[0].counter&&t[1].counter&&t[2].counter&&t[3].counter&&t[4].counter&&t[5].counter&&t[6].counter&&t[7].counter&&t[8].counter&&t[9].counter&&t[10].counter&&t[11].counter&&t[12].counter&&t[13].counter&&t[14].counter&&t[15].counter>=3&&this.afterCali()},deep:!0}}},xt=Bt,Ot=(n("5e01"),Object(d["a"])(xt,bt,vt,!1,null,"38155775",null)),Et=Ot.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" Calibration done! ")]),n("button",{on:{click:t.backToSettings}},[t._v(" Back to Settings")])])},Wt=[],Mt={name:"afterCali",methods:{backToSettings:function(){this.$store.commit("changeStateMachine","SettingSelected")}}},It=Mt,Lt=(n("67d0"),Object(d["a"])(It,$t,Wt,!1,null,"f627e4be",null)),Ft=Lt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Highest Score:")]),n("p",[t._v(t._s(t.highestScore))]),n("button",{attrs:{id:"Hide_Score"},on:{click:t.hideScore}},[t._v("Hide Score")])])},Ht=[],zt={name:"HighScore",props:{xWG:{type:Number,default:0},yWG:{type:Number,default:0}},data:function(){return{hideCounter:0,highestScore:JSON.parse(window.localStorage.getItem("High Score"))}},methods:{hideScore:function(){this.$store.commit("changeStateMachine","StartMenu")}},computed:{xWG_yWG:function(){return"".concat(this.xWG,"|").concat(this.yWG)},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter},timeForEyetrackinggetter:function(){return this.$store.getters.timeForEyetrackingGetter},btnHide:function(){var t=document.getElementById("Hide_Score");return t.getBoundingClientRect()}},watch:{xWG_yWG:function(t){var e=t.split("|"),n=Object(w["a"])(e,2),o=n[0],i=n[1];o<=this.btnHide.right&&o>=this.btnHide.left&&i<=this.btnHide.bottom&&i>=this.btnHide.top&&this.hideCounter++,document.getElementById("Hide_Score").style.opacity="".concat(1-this.hideCounter/(this.timeForEyetrackinggetter+2)),this.hideCounter>=this.timeForEyetrackinggetter&&(this.hideCounter=0,this.hideScore())}}},jt=zt,Nt=(n("f5dc"),Object(d["a"])(jt,Pt,Ht,!1,null,"3236b7de",null)),Tt=Nt.exports,Dt={name:"App",components:{WebGazer:m,GazeCloud:C,StartMenu:x,Game:rt,GameSettings:ht,beforeCali:yt,Calibration:Et,afterCali:Ft,HighScore:Tt},data:function(){return{x_wg:0,y_wg:0,highestScore:0,off:!1}},methods:{onUpdate:function(t){this.x_wg=t.x,this.y_wg=t.y},changeTheControl:function(t){this.off=t,console.log("changeTheControl "+t)}},computed:{stateMachinegetter:function(){return this.$store.getters.stateMachineGetter},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter}},mounted:function(){}},Rt=Dt,At=(n("50af"),Object(d["a"])(Rt,i,r,!1,null,"4c391e6b",null)),Yt=At.exports,Vt=n("2f62");o["a"].use(Vt["a"]);var Ut=new Vt["a"].Store({state:{speed:500,amount:10,score:0,lives:3,stateMachine:"StartMenu",eyetracking:"Default",counterColorList:0,accessibleColor:!1,gameOver:!1,timeForEyetracking:0},getters:{stateMachineGetter:function(t){return t.stateMachine},speedGetter:function(t){return t.speed},amountGetter:function(t){return t.amount},scoreGetter:function(t){return t.score},livesGetter:function(t){return t.lives},eyetrackingGetter:function(t){return t.eyetracking},counterColorListGetter:function(t){return t.counterColorList},accessibleColorGetter:function(t){return t.accessibleColor},gameOverGetter:function(t){return t.gameOver},timeForEyetrackingGetter:function(t){return t.timeForEyetracking}},mutations:{changeStateMachine:function(t,e){t.stateMachine=e,console.log("New State Machine is ".concat(t.stateMachine))},saveSettings:function(t,e){t.speed=e.speed,t.amount=e.amount,console.log("save Setting "+t.speed),console.log("save Setting "+t.amount)},incrementScore:function(t){t.score++},decrementLives:function(t){t.lives--},resetScore:function(t){t.score=0},resetLives:function(t){t.lives=3},changeEyetracking:function(t,e){t.eyetracking=e.value,console.log("Eyetracking is ".concat(t.eyetracking)),"WebGazer"===t.eyetracking?t.timeForEyetracking=6:"GazeCloud"===t.eyetracking&&(t.timeForEyetracking=11)},incrementCounterColorList:function(t){t.accessibleColor?t.counterColorList>=7?(t.counterColorList=0,console.log(" accessibleColor counterColorList:  "+this.counterColorList)):(t.counterColorList++,console.log("counterColorList:  "+this.counterColorList)):t.counterColorList>=29?t.counterColorList=0:t.counterColorList++},changeColorList:function(t,e){t.accessibleColor=e.value,console.log("AccessibleColorList is ".concat(t.accessibleColor))},end_startGame:function(t,e){t.gameOver=e.value,console.log("Game is ".concat(t.gameOver))}},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({store:Ut,render:function(t){return t(Yt)}}).$mount("#app")},"5e01":function(t,e,n){"use strict";n("ec10")},6:function(t,e){},"67d0":function(t,e,n){"use strict";n("2d7b")},"6e34":function(t,e,n){},7:function(t,e){},7341:function(t,e,n){"use strict";n("2ae3")},8:function(t,e){},8975:function(t,e,n){"use strict";n("1de5")},"9c1e":function(t,e,n){"use strict";n("6e34")},a3cb:function(t,e,n){"use strict";n("a7b5")},a7b5:function(t,e,n){},c5ce:function(t,e,n){},d41c:function(t,e,n){},d6c9:function(t,e,n){"use strict";n("d41c")},e0fc:function(t,e,n){"use strict";n("3dd6")},ec10:function(t,e,n){},f5dc:function(t,e,n){"use strict";n("0ca4")},fffd:function(t,e,n){}});
//# sourceMappingURL=app.1b1fd5a2.js.map