<template>
    <div>
        <!-- <h2>Current Score:</h2>
        <p>{{scoregetter}}</p> -->
        <h2 >Highest Score:</h2>
        <p>{{highestScore}}</p>

        <button id="Hide_Score" @click="hideScore">Hide Score</button>
    </div>
</template>

<script>
    export default {
        name: "HighScore",
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
                hideCounter: 0,
                highestScore: JSON.parse(window.localStorage.getItem('High Score')),
            }
        },
        methods: {
            hideScore() {
                this.$store.commit('changeStateMachine', "StartMenu");
            }
        },
        computed: {
            // scoregetter(){
            //     return this.$store.getters.scoreGetter;
            // },
            xWG_yWG(){
                return `${this.xWG}|${this.yWG}`;
            },
            eyetrackinggetter(){
                return this.$store.getters.eyetrackingGetter;
            },
            btnHide(){
                let btnHIDE = document.getElementById("Hide_Score");
                return btnHIDE.getBoundingClientRect();
            },
        },
        watch: {
            xWG_yWG(newValue) {
                const [newxWg, newyWg] = newValue.split('|');
                if (this.eyetrackinggetter){
                    if(newxWg<=this.btnHide.right && newxWg>=this.btnHide.left && newyWg<=this.btnHide.bottom && newyWg>=this.btnHide.top ){
                        this.hideCounter++;
                    }
                    if(this.hideCounter>=7){
                        this.hideCounter=0;
                        this.hideScore();
                    }
                }
            }
        }
    }
</script>

<style scoped>
h2{
    font-size: 125%;
    color: #164faa;
    text-shadow: #eceaea 2px 2px 1px;
    font-family: Georgia, serif;
    font-size: 35px;
    letter-spacing: 1.4px;
    word-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
    padding:20px 10px 0px 10px;
    margin: 60px auto 55px auto ;
}
p{
    font-size: 200%;
    color: #0e8328;
    text-shadow: #eceaea 1px 1px 0;
    font-weight: bold;
}
button {
    width: 275px;
    height: 95px ; 
	box-shadow:inset 0px 1px 0px 0px #fce2c1;
    background:linear-gradient(to bottom,  #79bbff 5%, #00649C 100%);
	background-color:#79bbff;;
	background-color:#79bbff;;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:32px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc9f52;
    padding:10px 10px 10px 10px;
    margin: 10px auto 55px auto ;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
}
button:hover {
	background:linear-gradient(to bottom,  #378de5 5%, #79bbff 100%);
	background-color:#378de5;
}
button:active {
	position:relative;
	top:1px;
}   

</style>
   
     