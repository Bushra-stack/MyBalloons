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
                @randomY="getRandomY(index)"
                @balloon-click="onBalloonClick"
                @updatePos="updateY(index)"
                
            /> 
            <p id="game-score">Current Score {{scoregetter}}</p>
        </div>
        <button id="continueButton" v-if= "stateMachinegetter === 'GamePaused'" @click="continuePlaying">Continue </button>
        <button id="stopButton" v-if= "stateMachinegetter === 'GamePaused'" @click="stopTheGame">Stop</button>
    </div>
</template>

<script>
import Balloon from "./Balloon.vue";
import Init from "@/util/init.js";
//import Confetti from "@/util/confetti.js-master/confetti.js";
//import Party from "@/util/party-js-master/party.js";

    export default {
        name: "Game",
        components: {Balloon},
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
                    { x: 0, y: 0, color: "red" },
                ],
                colorList: Init.colorList,
                newY: true,
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            };
        },
        created () {
            if((JSON.parse(window.localStorage.getItem('High Score'))) == null){
                window.localStorage.setItem('High Score', this.scoregetter);
            }else {
               // console.log("High score vorhanden "+ JSON.parse(window.localStorage.getItem('High Score')));
                this.highestScore = JSON.parse(window.localStorage.getItem('High Score'));
            }
            //console.log(this.amountgetter);
            var i = 0;
            for(i ; i < (this.amountgetter - 1);  i++){
                this.list.splice(this.list.length, 0 ,{ x: Init.random(50, window.innerWidth - 110), y: 0, color: this.colorList[this.counterColorListgetter] });
                this.$store.commit('incrementCounterColorList');
            }
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
                this.resetmyScore();
            },
            continuePlaying(){
                this.$store.commit('changeStateMachine', 'GameStarted') 
            },
            incrementmyScore(){
                this.$store.commit('incrementScore');
                if(JSON.parse(window.localStorage.getItem('High Score'))<this.scoregetter){
                    window.localStorage.setItem('High Score', this.scoregetter);
                    alert("Yahoo! You reached an new high score!!");
                    //Confetti.startConfetti();
                    // Party.screen({ 
                    //     count: 500 * (window.innerWidth / 1980),
                    //     countVariation: 0.5,
                    //     angleSpan: 0,
                    //     yVelocity: -100,
                    //     yVelocityVariation: 2,
                    //     rotationVelocityLimit: 6,
                    //     scaleVariation: 0.8
                    // });
                }
            },
            resetmyScore(){
                this.$store.commit('resetScore');
            },
            onBalloonClick(index) {
                this.list.splice(index, 1);
                this.incrementmyScore();
            },
            updateY(index){
                if(this.list.length == this.amountgetter){
                    if(this.list[index].y > window.innerHeight + 125){
                        this.list[index].y=Init.random(-50, 10);
                    }else{
                        this.list[index].y=this.list[index].y + 10;
                    }

                }else {
                    this.updateList();
                }
            },
            updateList(){
                if (this.list.length < this.amountgetter){
                    this.list.splice(this.list.length, 0, { x: Init.random(10,window.innerWidth - 110), y: Init.random(-50, window.innerHeight * 0.45), color: this.colorList[this.counterColorListgetter] } );
                    this.$store.commit('incrementCounterColorList');
                }
            },
            getRandomY(index){
                if(this.newY){
                    this.list[index].y= Init.random(-50, window.innerHeight * 0.45);// (min,max)
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
            }
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
            counterColorListgetter(){
                return this.$store.getters.counterColorListGetter;
            },
            xWG_yWG() {
                return `${this.xWG}|${this.yWG}`;
            },
            eyetrackinggetter(){
                return this.$store.getters.eyetrackingGetter;
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
            }
        },

    }
</script>

<style scoped>
#pauseButton, #stopButton, #continueButton{
    width: 30% ;
    height: 95px ;
	box-shadow:inset 0px 1px 0px 0px #f5978e;
	background:linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);
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
	background:linear-gradient(to bottom, #e7bb5c 5%, #d49100 100%);
	background-color:#F5AB07;
	border:1px solid #eec303;
    padding:10px 3px 10px 3px;
    margin: 5px auto 0px auto ;

}
#continueButton{
	box-shadow:inset 0px 1px 0px 0px #a4e271;
	background:linear-gradient(to bottom, #89c403 5%, #77a809 100%);
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
    background:linear-gradient(to bottom, #f5c763 5%, rgb(247, 222, 6) 100%);
	background-color:#f5c04f;
}
#stopButton:active {
	position:relative;
	top:1px;
}
#game-score{
    color: #F5AB07;
    text-shadow:5px 2px 1px #eef3d9;
    font-family: Georgia, serif;
    font-size: 30px;
    letter-spacing: 1.4px;
    word-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
}

</style>