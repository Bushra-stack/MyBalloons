<template>
    <div>
        <div v-if= "stateMachinegetter === 'GameStarted'">
            <button id="pauseButton" @click="pauseTheGame">Pause</button>
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
        data() {
            return {
                state: "stop", //play. pause
                list: [
                    { x: 0, y: 0, color: "red" },
                ],
                colorList: Init.colorList,
                newY: true,
                windowWidth: window.innerWidth,
            };
        },
        created () {
            if((JSON.parse(window.localStorage.getItem('High Score'))) == null){
                window.localStorage.setItem('High Score', this.scoregetter);
            }else {
                console.log("vorhanden "+ JSON.parse(window.localStorage.getItem('High Score')));
                this.highestScore = JSON.parse(window.localStorage.getItem('High Score'));
            }
            console.log(this.amountgetter);
            var i = 0;
            for(i ; i < (this.amountgetter - 1);  i++){
                this.list.splice(this.list.length, 0 ,{ x: Init.random(50,this.windowWidth -100), y: 0, color: this.colorList[i] });
            }
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
                console.log("scoregetter is: "+ this.scoregetter);
            },
            resetmyScore(){
                this.$store.commit('resetScore');
            },
            onBalloonClick(index) {
                this.list.splice(index, 1);
                this.incrementmyScore();
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
                //console.log(this.list);
            },
            updateY(index){
                if(this.list.length == this.amountgetter){
                    console.log(this.list.length);
                    console.log(this.amountgetter);
                    console.log(index);
                    this.list[index].y=this.list[index].y + 10;
                }else {
                    this.updateList();
                }
            },
            updateList(){
                var diff= 0;
                if(this.list.length > this.amountgetter){
                    //delete vue.delete??
                    diff = this.list.length -this.amountgetter
                    this.list.splice(this.amountgetter, diff);
                    console.log("größer"+this.list.length);
                }else if (this.list.length < this.amountgetter){
                    //add vue.set??
                    this.list.splice(this.list.length, 0, { x: Init.random(50,this.windowWidth), y: Init.random(-250, 100), color: this.colorList[this.list.length-1] } );
                    console.log("kleiner"+this.list.length);
                }
            },
            getRandomY(index){
                if(this.newY){
                    this.list[index].y= Init.random(-50, 350);// (min,max)
                }
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
            }
        }
    }
</script>

<style scoped>
#pauseButton, #stopButton, #continueButton{
    width: 20% ;
    height: 95px ;
    margin:50px;
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
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #810e05;
}
#pauseButton{
    box-shadow:inset 0px 1px 0px 0px #eece8a;
	background:linear-gradient(to bottom, #e7bb5c 5%, #d49100 100%);
	background-color:#F5AB07;
	border:1px solid #eec303;
    margin: 0%;
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
    font-size: 125%;
    color: #F5AB07;
    text-shadow:5px 2px 1px #eef3d9;
    font-family: Georgia, serif;
    font-size: 35px;
    letter-spacing: 1.4px;
    word-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
}

</style>