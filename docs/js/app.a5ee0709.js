(function(t){function e(e){for(var o,s,a=e[0],c=e[1],u=e[2],h=0,d=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/MyBalloons/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},"25b8":function(t,e,n){"use strict";n("34e5")},"2ff4":function(t,e,n){},3:function(t,e){},"34e5":function(t,e,n){},"368b":function(t,e,n){"use strict";n("d8f4")},4:function(t,e){},4242:function(t,e,n){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("WebGazer",{on:{update:t.onUpdate}}),n("GazeCloud",{on:{update:t.onUpdate}}),"StartMenu"===t.stateMachinegetter?n("StartMenu",{attrs:{xWG:t.x_wg,yWG:t.y_wg}}):t._e(),"GameStarted"===t.stateMachinegetter||"GamePaused"===t.stateMachinegetter?n("section",[n("Game",{attrs:{xWG:t.x_wg,yWG:t.y_wg}})],1):t._e(),"SettingSelected"===t.stateMachinegetter?n("section",[n("GameSettings",{attrs:{xWG:t.x_wg,yWG:t.y_wg}})],1):t._e(),"HighScore"===t.stateMachinegetter?n("section",[n("HighScore",{attrs:{xWG:t.x_wg,yWG:t.y_wg}})],1):t._e()],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},a=[],c=(n("96cf"),n("1da1")),u=n("06f5"),l={name:"WebGazer",props:{},data:function(){return{x:0,y:0}},created:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},computed:{eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter}},methods:{integrate:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,window.applyCalmanFilter=!0,window.saveDataAccrossSessions=!0,u["a"].params.showVideoPreview=!0,e.next=6,u["a"].setRegression("ridge").setGazeListener((function(t){t&&(n.x=t.x,n.y=t.y,n.$emit("update",{x:t.x,y:t.y}))})).begin();case 6:u["a"].showFaceOverlay(!0),u["a"].showPredictionPoints(!0);case 8:case"end":return e.stop()}}),e)})))()}},watch:{eyetrackinggetter:function(t){"WebGazer"===t?this.integrate():(window.applyKalmanFilter=!1,u["a"].params.showVideoPreview=!1,u["a"].showPredictionPoints(!1),u["a"].showFaceOverlay(!1),u["a"].showFaceFeedbackBox(!1),u["a"].end(),console.log("End of eyetracking"))}}},h=l,d=n("2877"),g=Object(d["a"])(h,s,a,!1,null,"7f8dc2c6",null),f=g.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"block",position:"fixed","z-index":"99999",left:"-5px",top:"-5px",background:"red","border-radius":"100%",opacity:"0.7",width:"10px",height:"10pxpx"},style:t.style,attrs:{id:"gazeCloudDot"}})},p=[],b={name:"GazeCloud",data:function(){return{x:0,y:0}},computed:{style:function(){return console.log(this.x,this.y),{transform:"translate3d("+this.x+"px, "+this.y+"px, 0px)"}},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter}},created:function(){},methods:{integrate:function(){if(window.GazeCloudAPI){var t=this;window.GazeCloudAPI.StartEyeTracking(),window.GazeCloudAPI.UseClickRecalibration=!0,window.GazeCloudAPI.OnCalibrationComplete=function(){console.log("Calibration complete"),window.GazeCloudAPI.OnResult=function(e){console.log("DATA: ",e),t.x=e.GazeX,t.y=e.GazeY,t.$emit("update",{x:e.GazeX,y:e.GazeY})}}}}},watch:{eyetrackinggetter:function(t){"GazeCloud"===t?this.integrate():window.GazeCloudAPI.StopEyeTracking()}}},y=b,C=Object(d["a"])(y,m,p,!1,null,"9cb1ab38",null),w=C.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"startMenu",attrs:{refs:"startMenu"}},[t.isSettingOn?t._e():n("button",{attrs:{id:"Play_Now"},on:{click:t.startGame}},[t._v("Play Now")]),t.isSettingOn?t._e():n("button",{attrs:{id:"Settings"},on:{click:t.goToSettings}},[t._v("Settings")]),t.isSettingOn?t._e():n("button",{attrs:{id:"High_Score"},on:{click:t.showHighScore}},[t._v("High Score")])])},S=[],G=(n("99af"),n("a9e3"),n("ac1f"),n("1276"),n("3835")),_={name:"StartMenu",props:{xWG:{type:Number,default:0},yWG:{type:Number,default:0}},data:function(){return{startCounter:0,settingCounter:0,scoreCounter:0}},methods:{startGame:function(){this.$store.commit("changeStateMachine","GameStarted")},goToSettings:function(){this.$store.commit("changeStateMachine","SettingSelected")},showHighScore:function(){this.$store.commit("changeStateMachine","HighScore")}},computed:{isSettingOn:function(){return this.$store.getters.isSettingsOn},xWG_yWG:function(){return"".concat(this.xWG,"|").concat(this.yWG)},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter},btn1:function(){var t=document.getElementById("Play_Now");return t.getBoundingClientRect()},btn2:function(){var t=document.getElementById("Settings");return t.getBoundingClientRect()},btn3:function(){var t=document.getElementById("High_Score");return t.getBoundingClientRect()}},watch:{xWG_yWG:function(t){var e=t.split("|"),n=Object(G["a"])(e,2),o=n[0],i=n[1];this.eyetrackinggetter&&(o<=this.btn1.right&&o>=this.btn1.left&&i<=this.btn1.bottom&&i>=this.btn1.top&&(console.log("play now"),this.startCounter++,this.settingCounter--,this.scoreCounter--),o<=this.btn2.right&&o>=this.btn2.left&&i<=this.btn2.bottom&&i>=this.btn2.top&&(console.log("Settings"),this.startCounter--,this.settingCounter++,this.scoreCounter--),o<=this.btn3.right&&o>=this.btn3.left&&i<=this.btn3.bottom&&i>=this.btn3.top&&(console.log("High_Score"),this.startCounter--,this.settingCounter--,this.scoreCounter++),this.startCounter>=7&&(this.startCounter=0,this.settingCounter=0,this.scoreCounter=0,this.startGame()),this.settingCounter>=7&&(this.startCounter=0,this.settingCounter=0,this.scoreCounter=0,this.goToSettings()),this.scoreCounter>=7&&(this.startCounter=0,this.settingCounter=0,this.scoreCounter=0,this.showHighScore()))}}},k=_,x=(n("368b"),Object(d["a"])(k,v,S,!1,null,"703fcc22",null)),W=x.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["GameStarted"===t.stateMachinegetter?n("div",[n("button",{attrs:{id:"pauseButton"},on:{click:t.pauseTheGame}},[t._v("Pause")]),t._l(t.list,(function(e,o){return n("Balloon",{key:o,attrs:{x:e.x,y:e.y,color:e.color,index:o},on:{randomY:function(e){return t.getRandomY(o)},"balloon-click":t.onBalloonClick,updatePos:function(e){return t.updateY(o)}}})})),n("p",{attrs:{id:"game-score"}},[t._v("Current Score "+t._s(t.scoregetter))])],2):t._e(),"GamePaused"===t.stateMachinegetter?n("button",{attrs:{id:"continueButton"},on:{click:t.continuePlaying}},[t._v("Continue ")]):t._e(),"GamePaused"===t.stateMachinegetter?n("button",{attrs:{id:"stopButton"},on:{click:t.stopTheGame}},[t._v("Stop")]):t._e()])},M=[],$=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"balloon",staticClass:"balloon",style:{color:t.color,background:t.color,left:t.x+"px",bottom:t.y+"px"},attrs:{id:t.index},on:{click:function(e){return t.$emit("balloon-click",t.index)}}})}),O=[],L={name:"Balloon",props:{x:{type:Number,default:0},y:{type:Number,default:0},color:{type:String,default:"red"},index:{type:Number,required:!0}},data:function(){return{intervalID:0,animationFrameId:0,clockwise:!0}},methods:{update:function(t){this.$emit("updatePos",t),this.clockwise?this.$refs.balloon.style.transform="rotate(5deg)":this.$refs.balloon.style.transform="rotate(-5deg)",this.clockwise=!this.clockwise}},computed:{speedgetter:function(){return this.$store.getters.speedGetter}},created:function(t){this.$emit("randomY",t),this.intervalID=window.setInterval(this.update,this.speedgetter)},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){window.clearInterval(this.intervalID)}},P=L,I=(n("25b8"),Object(d["a"])(P,$,O,!1,null,"8dec6234",null)),z=I.exports;function H(){console.log("hello")}function E(){console.log("bye")}function j(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)}var N=["yellow","skyblue","maroon","fuchsia","orange","cyan","pink","green","blue","brown","chartreuse","indigo","DarkSlateBlue","Coral","Chocolate","Gold","Crimson","MediumBlue","SlateGray","Magenta","FireBrick","DarkSalmon","SeaGreen","SpringGreen","SteelBlue","CornflowerBlue","PowderBlue","Moccasin","Orchid","Aqua"],T=["#CC79A7","#D55E00","#0072B2","#F0E442","#009E73","#56B4E9","#E69F00","#000000"],R={hello:H,bye:E,random:j,colorList:N,accessibleColorList:T},A=n("890b"),F=n.n(A);o["a"].use(F.a);var Y={name:"Game",components:{Balloon:z},props:{xWG:{type:Number,default:0},yWG:{type:Number,default:0}},data:function(){return{pauseCounter:0,continueCounter:0,stopCounter:0,state:"stop",list:[{x:0,y:0,color:"#332288"}],colorList:R.colorList,newY:!0,windowWidth:window.innerWidth,windowHeight:window.innerHeight,oneTimeConfetti:!1}},created:function(){null==JSON.parse(window.localStorage.getItem("High Score"))?window.localStorage.setItem("High Score",this.scoregetter):this.highestScore=JSON.parse(window.localStorage.getItem("High Score")),this.accessibleColorgetter?(this.$store.commit("incrementCounterColorList"),this.colorList=R.accessibleColorList,console.log("accessible colorlist")):(this.colorList=R.colorList,console.log("still colorlist"));var t=0;for(t;t<this.amountgetter-1;t++)this.list.splice(this.list.length,0,{x:R.random(50,window.innerWidth-110),y:0,color:this.colorList[this.counterColorListgetter]}),this.$store.commit("incrementCounterColorList");window.addEventListener("resize",this.resizeXY)},methods:{pauseTheGame:function(){this.$store.commit("changeStateMachine","GamePaused"),this.newY=!1},stopTheGame:function(){this.$store.commit("changeStateMachine","StartMenu"),this.list=[],this.resetmyScore()},continuePlaying:function(){this.$store.commit("changeStateMachine","GameStarted")},incrementmyScore:function(){if(this.$store.commit("incrementScore"),JSON.parse(window.localStorage.getItem("High Score"))<this.scoregetter&&!1===this.oneTimeConfetti){window.localStorage.setItem("High Score",this.scoregetter),this.$confetti.start();var t=this.$confetti;alert("Yahoo! You reached an new high score!!"),setTimeout((function(){t.stop()}),5e3),this.oneTimeConfetti=!0}},resetmyScore:function(){this.$store.commit("resetScore")},onBalloonClick:function(t){this.list.splice(t,1),this.incrementmyScore()},updateY:function(t){this.list.length==this.amountgetter?this.list[t].y>window.innerHeight+125?this.list[t].y=R.random(-50,10):this.list[t].y=this.list[t].y+10:this.updateList()},updateList:function(){this.list.length<this.amountgetter&&(this.list.splice(this.list.length,0,{x:R.random(10,window.innerWidth-110),y:R.random(-50,.45*window.innerHeight),color:this.colorList[this.counterColorListgetter]}),this.$store.commit("incrementCounterColorList"))},getRandomY:function(t){this.newY&&(this.list[t].y=R.random(-50,.45*window.innerHeight))},resizeXY:function(){console.log("resize");var t=window.innerWidth/this.windowWidth;this.windowWidth=window.innerWidth;var e=window.innerHeight/this.windowHeight;this.windowHeight=window.innerHeight;var n=0;for(n;n<this.list.length;n++)this.list[n].x=this.list[n].x*t,this.list[n].y=this.list[n].y*e}},computed:{stateMachinegetter:function(){return this.$store.getters.stateMachineGetter},amountgetter:function(){return this.$store.getters.amountGetter},scoregetter:function(){return this.$store.getters.scoreGetter},counterColorListgetter:function(){return this.$store.getters.counterColorListGetter},xWG_yWG:function(){return"".concat(this.xWG,"|").concat(this.yWG)},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter},accessibleColorgetter:function(){return this.$store.getters.accessibleColorGetter},btnPause:function(){var t=document.getElementById("pauseButton");return t.getBoundingClientRect()},btnContinue:function(){var t=document.getElementById("continueButton");return t.getBoundingClientRect()},btnStop:function(){var t=document.getElementById("stopButton");return t.getBoundingClientRect()}},watch:{xWG_yWG:function(t){var e=t.split("|"),n=Object(G["a"])(e,2),o=n[0],i=n[1];if(this.eyetrackinggetter)if("GameStarted"===this.stateMachinegetter){var r=0,s=null,a=null;for(r;r<this.list.length;r++)s=document.getElementById("".concat(r)),a=s.getBoundingClientRect(),o<=a.right&&o>=a.left&&i<=a.bottom&&i>=a.top&&(console.log(this.list[r].color),this.list.splice(r,1),this.incrementmyScore());o<=this.btnPause.right&&o>=this.btnPause.left&&i<=this.btnPause.bottom&&i>=this.btnPause.top&&this.pauseCounter++,this.pauseCounter>=7&&(this.pauseCounter=0,this.pauseTheGame())}else"GamePaused"===this.stateMachinegetter&&(o<=this.btnContinue.right&&o>=this.btnContinue.left&&i<=this.btnContinue.bottom&&i>=this.btnContinue.top&&(this.continueCounter++,this.stopCounter--),o<=this.btnStop.right&&o>=this.btnStop.left&&i<=this.btnStop.bottom&&i>=this.btnStop.top&&(this.continueCounter--,this.stopCounter++),this.continueCounter>=7&&(this.continueCounter=0,this.stopCounter=0,this.continuePlaying()),this.stopCounter>=7&&(this.continueCounter=0,this.stopCounter=0,this.stopTheGame()))},accessibleColorgetter:function(t){console.log(t),t?(this.colorList=R.accessibleColorList,console.log("accessible colorlist")):(this.colorList=R.colorList,console.log("still colorlist"))}}},D=Y,V=(n("6633"),Object(d["a"])(D,B,M,!1,null,"392e99c3",null)),J=V.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{attrs:{for:"speed"}},[t._v("Speed")]),n("p",[t._v(t._s(t.speedOfInput))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.speedOfInput,expression:"speedOfInput"}],attrs:{type:"range",id:"speed",name:"speed",min:"100",max:"2000",value:"300",step:"100"},domProps:{value:t.speedOfInput},on:{__r:function(e){t.speedOfInput=e.target.value}}}),n("label",{attrs:{for:"amount"}},[t._v("Amount")]),n("p",[t._v(t._s(t.amountValue))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amountValue,expression:"amountValue"}],attrs:{type:"range",id:"amount",name:"amount",min:"1",max:"30",value:"10",step:"1"},domProps:{value:t.amountValue},on:{__r:function(e){t.amountValue=e.target.value}}}),n("p",{attrs:{id:"control"}},[t._v("Control with:")]),n("label",{staticClass:"control",attrs:{for:"mouse"}},[t._v("Mouse")]),n("input",{staticClass:"control",attrs:{type:"radio",id:"mouse",name:"control",value:"mouse",checked:""}}),n("label",{staticClass:"control",attrs:{for:"webGazer"}},[t._v("WebGazer")]),n("input",{staticClass:"control",attrs:{type:"radio",id:"WebGazer",name:"control",value:"WebGazer"}}),n("label",{staticClass:"control",attrs:{for:"GazeCloud"}},[t._v("GazeCloud")]),n("input",{staticClass:"control",attrs:{type:"radio",id:"GazeCloud",name:"control",value:"GazeCloud"}}),n("br"),n("label",{attrs:{for:"color"}},[t._v("Adapt Color")]),n("br"),n("input",{attrs:{type:"checkbox",id:"color",name:"color",value:"false"}}),n("button",{attrs:{id:"backButton"},on:{click:t.backFromSetting}},[t._v("Back")]),n("button",{attrs:{id:"saveButton"},on:{click:t.saveSetting}},[t._v("Save")])])},X=[],q={name:"settings",props:{xWG:{type:Number,default:0},yWG:{type:Number,default:0}},data:function(){return{saveCounter:0,backCounter:0,speedOfInput:200,amountValue:5}},methods:{backFromSetting:function(){this.$store.commit("changeStateMachine","StartMenu")},saveSetting:function(){var t="Default";document.getElementById("WebGazer").checked&&(t="WebGazer"),document.getElementById("GazeCloud").checked&&(t="GazeCloud"),console.log("eyetracking in game settings"+t),this.$store.commit("changeEyetracking",{value:t});var e=2e3-this.speedOfInput+100;this.$store.commit("saveSettings",{speed:e,amount:this.amountValue});var n=!!document.getElementById("color").checked;this.$store.commit("changeColorList",{value:n})}},computed:{speedValue:function(){return 2e3-this.speedOfInput+100},xWG_yWG:function(){return"".concat(this.xWG,"|").concat(this.yWG)},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter},btnSave:function(){var t=document.getElementById("saveButton");return t.getBoundingClientRect()},btnBack:function(){var t=document.getElementById("backButton");return t.getBoundingClientRect()}},watch:{xWG_yWG:function(t){var e=t.split("|"),n=Object(G["a"])(e,2),o=n[0],i=n[1];this.eyetrackinggetter&&(o<=this.btnSave.right&&o>=this.btnSave.left&&i<=this.btnSave.bottom&&i>=this.btnSave.top&&(this.saveCounter++,this.backCounter--),o<=this.btnBack.right&&o>=this.btnBack.left&&i<=this.btnBack.bottom&&i>=this.btnBack.top&&(this.saveCounter--,this.backCounter++),this.saveCounter>=7&&(this.saveCounter=0,this.backCounter=0,this.saveSetting()),this.backCounter>=7&&(this.saveCounter=0,this.backCounter=0,this.backFromSetting()))}}},K=q,Q=(n("a550"),Object(d["a"])(K,U,X,!1,null,"dd430150",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Highest Score:")]),n("p",[t._v(t._s(t.highestScoreFromStorage))]),n("button",{attrs:{id:"Hide_Score"},on:{click:t.hideScore}},[t._v("Hide Score")])])},et=[],nt={name:"HighScore",props:{xWG:{type:Number,default:0},yWG:{type:Number,default:0}},data:function(){return{hideCounter:0,highestScore:JSON.parse(window.localStorage.getItem("High Score"))}},methods:{hideScore:function(){this.$store.commit("changeStateMachine","StartMenu")}},computed:{highestScoreFromStorage:function(){return this.highestScore},xWG_yWG:function(){return"".concat(this.xWG,"|").concat(this.yWG)},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter},btnHide:function(){var t=document.getElementById("Hide_Score");return t.getBoundingClientRect()}},watch:{xWG_yWG:function(t){var e=t.split("|"),n=Object(G["a"])(e,2),o=n[0],i=n[1];this.eyetrackinggetter&&(o<=this.btnHide.right&&o>=this.btnHide.left&&i<=this.btnHide.bottom&&i>=this.btnHide.top&&this.hideCounter++,this.hideCounter>=7&&(this.hideCounter=0,this.hideScore()))}}},ot=nt,it=(n("86de"),Object(d["a"])(ot,tt,et,!1,null,"7744ae36",null)),rt=it.exports,st={name:"App",components:{WebGazer:f,GazeCloud:w,StartMenu:W,Game:J,GameSettings:Z,HighScore:rt},data:function(){return{x_wg:0,y_wg:0,highestScore:0,off:!1}},methods:{onUpdate:function(t){this.x_wg=t.x,this.y_wg=t.y},changeTheControl:function(t){this.off=t,console.log("changeTheControl "+t)}},computed:{stateMachinegetter:function(){return this.$store.getters.stateMachineGetter},eyetrackinggetter:function(){return this.$store.getters.eyetrackingGetter}},mounted:function(){}},at=st,ct=(n("61f9"),Object(d["a"])(at,i,r,!1,null,"7c6c27ff",null)),ut=ct.exports,lt=n("2f62");o["a"].use(lt["a"]);var ht=new lt["a"].Store({state:{speed:500,amount:10,score:0,stateMachine:"StartMenu",eyetracking:"Default",counterColorList:0,accessibleColor:!1},getters:{stateMachineGetter:function(t){return t.stateMachine},speedGetter:function(t){return t.speed},amountGetter:function(t){return t.amount},scoreGetter:function(t){return t.score},eyetrackingGetter:function(t){return t.eyetracking},counterColorListGetter:function(t){return t.counterColorList},accessibleColorGetter:function(t){return t.accessibleColor}},mutations:{changeStateMachine:function(t,e){t.stateMachine=e,console.log("New State Machine is ".concat(t.stateMachine))},saveSettings:function(t,e){t.speed=e.speed,t.amount=e.amount,console.log("save Setting "+t.speed),console.log("save Setting "+t.amount)},incrementScore:function(t){t.score++},resetScore:function(t){t.score=0},changeEyetracking:function(t,e){t.eyetracking=e.value,console.log("Eyetracking is ".concat(t.eyetracking))},incrementCounterColorList:function(t){t.accessibleColor?t.counterColorList>=7?(t.counterColorList=0,console.log(" accessibleColor counterColorList:  "+this.counterColorList)):(t.counterColorList++,console.log("counterColorList:  "+this.counterColorList)):t.counterColorList>=29?t.counterColorList=0:t.counterColorList++},changeColorList:function(t,e){t.accessibleColor=e.value,console.log("AccessibleColorList is ".concat(t.accessibleColor))}},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({store:ht,render:function(t){return t(ut)}}).$mount("#app")},6:function(t,e){},"61f9":function(t,e,n){"use strict";n("4242")},6633:function(t,e,n){"use strict";n("7ec0")},7:function(t,e){},"7ec0":function(t,e,n){},8:function(t,e){},"86de":function(t,e,n){"use strict";n("d0e7")},a550:function(t,e,n){"use strict";n("2ff4")},d0e7:function(t,e,n){},d8f4:function(t,e,n){}});
//# sourceMappingURL=app.a5ee0709.js.map