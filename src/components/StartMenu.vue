<template>
    <div
        refs="startMenu"
        class="startMenu"
    >
        <button id="Play_Now" v-if="!isSettingOn" @click="startGame" >Play Now</button>
        <button id="Settings" v-if="!isSettingOn" @click="goToSettings">Settings</button>
        <button id="High_Score" v-if="!isSettingOn" @click="showHighScore">High Score</button>
    </div>
</template>

<script>
//import { set } from 'vue/types/umd';
//import { mapGetters } from 'vuex'
    export default {
        name:"StartMenu",
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
                startCounter: 0,
                settingCounter:0,
                scoreCounter: 0,
            }
        },
        methods:{
            startGame(){
                this.$store.commit('changeStateMachine', "GameStarted");
            },
            goToSettings(){
                this.$store.commit('changeStateMachine', "SettingSelected");
            },
            showHighScore(){
                this.$store.commit('changeStateMachine', "HighScore");
            },  
        },
        computed: {
            isSettingOn(){
                return this.$store.getters.isSettingsOn
            },
            xWG_yWG(){
                return `${this.xWG}|${this.yWG}`;
            },
            eyetrackinggetter(){
                return this.$store.getters.eyetrackingGetter;
            },
            btn1(){
                let btn1elem = document.getElementById("Play_Now");
                return btn1elem.getBoundingClientRect();
            },
            btn2(){
                let btn2elem = document.getElementById("Settings");
                return btn2elem.getBoundingClientRect();
            },
            btn3(){
                let btn3elem = document.getElementById("High_Score");
                return btn3elem.getBoundingClientRect();
            },
        },
        watch: {
            xWG_yWG(newValue) {
                const [newxWg, newyWg] = newValue.split('|');
               if (this.eyetrackinggetter){
                    if(newxWg<=this.btn1.right && newxWg>=this.btn1.left && newyWg<=this.btn1.bottom && newyWg>=this.btn1.top ){
                        console.log("play now");
                        this.startCounter++;
                        this.settingCounter--;
                        this.scoreCounter--;
                    }
                    if(newxWg<=this.btn2.right && newxWg>=this.btn2.left && newyWg<=this.btn2.bottom && newyWg>=this.btn2.top ){
                        console.log("Settings");
                        this.startCounter--;
                        this.settingCounter++;
                        this.scoreCounter--;
                    }
                    if(newxWg<=this.btn3.right && newxWg>=this.btn3.left && newyWg<=this.btn3.bottom && newyWg>=this.btn3.top ){
                        console.log("High_Score");
                        this.startCounter--;
                        this.settingCounter--;
                        this.scoreCounter++;
                    }

                    if(this.startCounter >= 7){
                        this.startCounter=0;
                        this.settingCounter=0;
                        this.scoreCounter=0;
                        this.startGame();
                    }
                    if(this.settingCounter >= 7){
                        this.startCounter=0;
                        this.settingCounter=0;
                        this.scoreCounter=0;
                        this.goToSettings();
                    }
                    if(this.scoreCounter >= 7){
                        this.startCounter=0;
                        this.settingCounter=0;
                        this.scoreCounter=0;
                        this.showHighScore();
                    }
                }
            }
        },
    }
</script>

<style scoped>
div{


}
button{
    width: 40%;
    height: 120px ;
	-moz-box-shadow:inset 0px 1px 0px 0px #f7c5c0;
	-webkit-box-shadow:inset 0px 1px 0px 0px #f7c5c0;
	box-shadow:inset 0px 1px 0px 0px #f7c5c0;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #fc8d83), color-stop(1, #e4685d));
	background:-moz-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
	background:-webkit-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
	background:-o-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
	background:-ms-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
	background:linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fc8d83', endColorstr='#e4685d',GradientType=0);
	background-color:#fc8d83;
	-webkit-border-radius:6px;
	-moz-border-radius:6px;
	border-radius:6px;
	border:1px solid #d83526;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:32px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #b23e35;
    display: block;
    padding:10px 10px 10px 10px;
    margin: 55px auto 55px auto ;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
}
button:hover{
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #e4685d), color-stop(1, #fc8d83));
    background:-moz-linear-gradient(top, #e4685d 5%, #fc8d83 100%);
    background:-webkit-linear-gradient(top, #e4685d 5%, #fc8d83 100%);
    background:-o-linear-gradient(top, #e4685d 5%, #fc8d83 100%);
    background:-ms-linear-gradient(top, #e4685d 5%, #fc8d83 100%);
    background:linear-gradient(to bottom, #e4685d 5%, #fc8d83 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4685d', endColorstr='#fc8d83',GradientType=0);
    background-color:#e4685d;
}
button:active{
	position:relative;
	top:1px;
}
</style>