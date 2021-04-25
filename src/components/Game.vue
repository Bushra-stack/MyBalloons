<template>
    <div>
        <div v-if= "stateMachinegetter === 'GameStarted'">
            <button id="pauseButton" @click="pauseTheGame" >Pause</button>
            <Balloon
                v-for="(item, index) of list"
                :key="index"
                :x="item.x"
                :y="item.y"
                :color="item.color"
                :index="index"
                @balloon-click="onBalloonClick"
                @updatePos="updateY(index)"
            /> 
            <BlackBalloon
                v-for="(item, index) of listOfBlackBalloon"
                :key="index+1*10"
                :x="item.x"
                :y="item.y"
                :color="item.color"
                :index="index"
                @balloon-click="onBlackBalloonClick"
                @updatePosBlack="updateYBlack(index)"
            /> 
            <p id="game-score">Current Score {{scoregetter}}</p>
            <p id="player-lifes">Current Lives {{livesgetter}}</p>

        </div>
        <button id="continueButton" v-if= "stateMachinegetter === 'GamePaused'" @click="continuePlaying">Continue </button>
        <button id="stopButton" v-if= "stateMachinegetter === 'GamePaused'" @click="stopTheGame">Stop</button>
        <GameOver v-if="this.gameOvergetter" @updateLists="update2Lists"/>
    </div>
</template>

<script>
import Balloon from "./Balloon.vue";
import BlackBalloon from "./BlackBalloon.vue";
import Init from "@/util/init.js";
import Vue from 'vue';
import VueConfetti from "vue-confetti";
import GameOver from "./GameOver.vue";
//import Confetti from "@/util/confetti.js-master/confetti.js";
//import Party from "@/util/party-js-master/party.js";
 Vue.use(VueConfetti)
    export default {
        name: "Game",
        components: {Balloon, BlackBalloon, GameOver},
        props: {
            xWG: {
                type: Number,
                default: 0,
            },
            yWG: {
                type: Number,
                default: 0,
            },
        },
        data() {
            return {
                pauseCounter: 0,
                continueCounter: 0,
                stopCounter: 0,
                state: "stop", //play. pause
                list: [
                    { x: 50, y: 0, color: "#332288" }, //lila
                ],
                listOfBlackBalloon: [
                    { x: 25, y: 0, color: "#000000" }, //schwarz
                ],
                colorList: Init.colorList,
                newY: true,
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
                oneTimeConfetti: false,
                
            };
        },
        created () {
            if((JSON.parse(window.localStorage.getItem('High Score'))) == null){
                window.localStorage.setItem('High Score', this.scoregetter);
            }else {
               // console.log("High score vorhanden "+ JSON.parse(window.localStorage.getItem('High Score')));
                this.highestScore = JSON.parse(window.localStorage.getItem('High Score'));
            }
            if(this.accessibleColorgetter){
                this.$store.commit('incrementCounterColorList');
                this.colorList= Init.accessibleColorList;
                console.log("accessible colorlist");
            }else{
                this.colorList= Init.colorList;
                console.log("still colorlist");
            }
            var i = 0;
            for(i ; i < (this.amountgetter - 1);  i++){
                this.list.splice(this.list.length, 0 ,{ x: Init.random(25, window.innerWidth - 135), y: Init.random(10, window.innerHeight * 0.55), color: this.colorList[this.counterColorListgetter] });
                this.$store.commit('incrementCounterColorList');
            }  
            i=0;
            for(i ; i < 2;  i++){
                this.listOfBlackBalloon.splice(this.listOfBlackBalloon.length, 0 ,{ x: Init.random(25, window.innerWidth - 135), y: Init.random(10, window.innerHeight * 0.55), color: "#000000"});
            }  
            i=0;
            window.addEventListener('resize', this.resizeXY);
        },
        methods: {
            pauseTheGame(){
                this.$store.commit('changeStateMachine', "GamePaused");
                this.newY=false;
            },
            stopTheGame(){
                this.$store.commit('changeStateMachine', "StartMenu");
                this.list = [];
                this.listOfBlackBalloon = []
                this.resetmyScore();
                this.resetmyLives();
            },
            continuePlaying(){
                this.$store.commit('changeStateMachine', 'GameStarted') 
            },
            incrementmyScore(){
                this.$store.commit('incrementScore');
                if(JSON.parse(window.localStorage.getItem('High Score'))<this.scoregetter){
                    window.localStorage.setItem('High Score', this.scoregetter);
                    if(this.oneTimeConfetti === false){
                        this.$confetti.start();
                        const confetti= this.$confetti;
                        alert("Yahoo! You reached an new high score!!");
                        setTimeout(()=>{confetti.stop();}, 5000);
                        this.oneTimeConfetti = true;
                    }
                }
            },
            decrementmyLives(){
                this.$store.commit('decrementLives');
            },
            resetmyScore(){
                this.$store.commit('resetScore');
            },
            onBalloonClick(index) {
                this.list.splice(index, 1);
                this.incrementmyScore();
            },
            onBlackBalloonClick(index) {
                this.listOfBlackBalloon.splice(index, 1);
                this.decrementmyLives();
                this.listOfBlackBalloon.splice(this.listOfBlackBalloon.length, 0, { x: Init.random(25,window.innerWidth - 135), y: Init.random(10, window.innerHeight * 0.55), color: '#000000' } );
            },
            resetmyLives(){
                this.$store.commit('resetLives');
            },
            updateY(index){
                if(this.list.length == this.amountgetter){
                    if(this.list[index].y > window.innerHeight + 125){
                        this.list[index].y=10;
                    }else{
                        this.list[index].y=this.list[index].y + 2;
                    }
                }else {
                    this.updateList();
                }
            },
            updateYBlack(index){
                if(this.listOfBlackBalloon[index].y > window.innerHeight + 125){
                    this.listOfBlackBalloon[index].y=10;
                }else{
                    this.listOfBlackBalloon[index].y=this.listOfBlackBalloon[index].y + 4;
                }
            },
            updateList(){
                if (this.list.length < this.amountgetter){
                    this.list.splice(this.list.length, 0, { x: Init.random(25,window.innerWidth - 135), y: Init.random(10, window.innerHeight * 0.55), color: this.colorList[this.counterColorListgetter] } );
                    this.$store.commit('incrementCounterColorList');
                }
            },
            resizeXY(){
                console.log("resize");
                var diffWidthInPercentage = window.innerWidth / this.windowWidth;
                this.windowWidth= window.innerWidth;
                var diffHeightInPercentage = window.innerHeight / this.windowHeight;
                this.windowHeight=  window.innerHeight;
                var j=0;
                for(j; j<this.list.length ; j++){
                    this.list[j].x = this.list[j].x * diffWidthInPercentage;
                    this.list[j].y = this.list[j].y * diffHeightInPercentage;
                }
            },
            update2Lists(){
                this.list = [];
                this.listOfBlackBalloon= [];
            },
        },
        computed: {
            stateMachinegetter(){
                return this.$store.getters.stateMachineGetter;
            },
            amountgetter(){
                return this.$store.getters.amountGetter;
            },
            scoregetter(){
                return this.$store.getters.scoreGetter;
            },
            livesgetter(){
                 return this.$store.getters.livesGetter;
            },
            counterColorListgetter(){
                return this.$store.getters.counterColorListGetter;
            },
            xWG_yWG() {
                return `${this.xWG}|${this.yWG}`;
            },
            eyetrackinggetter(){
                return this.$store.getters.eyetrackingGetter;
            },
            accessibleColorgetter(){
                return this.$store.getters.accessibleColorGetter;
            },
            gameOvergetter(){
                 return this.$store.getters.gameOverGetter;
            },
            btnPause(){
                let btnPAUSE = document.getElementById("pauseButton");
                return btnPAUSE.getBoundingClientRect();
            },
            btnContinue(){
                let btnCONTINUE= document.getElementById("continueButton");
                return btnCONTINUE.getBoundingClientRect();
            },
            btnStop(){
                let btnSTOP = document.getElementById("stopButton");
                return btnSTOP.getBoundingClientRect();
            },
        },
        watch: {
            livesgetter(newValue){
                if(newValue<=0){
                    this.$store.commit('end_startGame', {value: true});
                }else{
                    this.$store.commit('end_startGame', {value: false});
                }
            },
            xWG_yWG(newValue) {
                const [newxWg, newyWg] = newValue.split('|');          
                if (this.eyetrackinggetter){
                    if(this.stateMachinegetter === 'GameStarted'){
                        var l=0;
                        let currentBalloon = null;
                        let currBalloon= null;
                        for(l; l<this.list.length; l++){
                            //console.log("xWg: "+ newxWg + " | yWg: " + newyWg);
                            //console.log("x: " + this.list[l].x + " | y: " + this.list[l].y);
                            currentBalloon = document.getElementById(`${l}`);
                            currBalloon= currentBalloon.getBoundingClientRect();
                            if(newxWg<=currBalloon.right && newxWg>=currBalloon.left && newyWg<=currBalloon.bottom && newyWg>=currBalloon.top){
                                console.log(this.list[l].color);
                                this.list.splice(l, 1);
                                this.incrementmyScore();
                            }
                        }
                        if(newxWg<=this.btnPause.right && newxWg>=this.btnPause.left && newyWg<=this.btnPause.bottom && newyWg>=this.btnPause.top ){
                            this.pauseCounter++;
                        }
                        if(this.pauseCounter >= 7 ){
                            this.pauseCounter=0;
                            this.pauseTheGame();
                        }
                    }else if(this.stateMachinegetter === 'GamePaused'){
                        if(newxWg<=this.btnContinue.right && newxWg>=this.btnContinue.left && newyWg<=this.btnContinue.bottom && newyWg>=this.btnContinue.top ){
                            this.continueCounter++;
                            this.stopCounter--;
                        }
                        if(newxWg<=this.btnStop.right && newxWg>=this.btnStop.left && newyWg<=this.btnStop.bottom && newyWg>=this.btnStop.top ){
                            this.continueCounter--;
                            this.stopCounter++;
                        }
                        if(this.continueCounter >=7){
                            this.continueCounter=0;
                            this.stopCounter=0;
                            this.continuePlaying();
                        }
                        if(this.stopCounter >=7){
                            this.continueCounter=0;
                            this.stopCounter=0;
                            this.stopTheGame();
                        }
                    } 
                }
            },
            accessibleColorgetter(newValue){
                console.log(newValue);
                if(newValue){
                     this.colorList= Init.accessibleColorList;
                    console.log("accessible colorlist");
                }else{
                    this.colorList= Init.colorList;
                    console.log("still colorlist");
                }
            }
        },
    }
</script>

<style scoped>
#pauseButton, #stopButton, #continueButton{
    width: 30% ;
    height: 95px ;
	box-shadow:inset 0px 1px 0px 0px #f5978e;
	background:linear-gradient(to bottom, #eb2d1c 5%, #980728 100%);
	background-color:#f24537;
	border-radius:6px;
	border:1px solid #d02718;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:35px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #810e05;
    padding:10px 10px 10px 10px;
    margin: 55px 30px 55px 30px ;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
}
#pauseButton{
    width: 210px ;
    height: 65px ;
    font-size:30px;
    box-shadow:inset 0px 1px 0px 0px #eece8a;
	background:linear-gradient(to bottom, #eccb0e 5%,  #9c5015  100%);
	background-color:#9B6236;
    color: #F4F5DF;
	border:1px solid #eec303;
    padding:10px 3px 10px 3px;
    margin: 5px auto 0px auto ;

}
#continueButton{
	box-shadow:inset 0px 1px 0px 0px #a4e271;
	background:linear-gradient(to bottom, #98d40a  5%,  #096705 100%);
	background-color:#89c403;
	border:1px solid #74b807;
}
#stopButton:hover {
	background:linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);
	background-color:#c62d1f;
}
#continueButton:hover {
	background:linear-gradient(to bottom, #77a809 5%, #89c403 100%);
	background-color:#77a809;
}
#pauseButton:hover{
    background:linear-gradient(to bottom,  #9c5015 5%, #eccb0e  100%);
	background-color:#f5c04f;
}
#stopButton:active {
	position:relative;
	top:1px;
}
#game-score{
    color: #825a02;
    text-shadow:5px 2px 1px #eef3d9;
    font-family: Georgia, serif;
    font-size: 30px;
    letter-spacing: 1.4px;
    word-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
}

</style>