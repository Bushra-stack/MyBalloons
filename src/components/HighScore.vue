<template>
    <div>
        <h2>Current Score:</h2>
        <p>{{scoregetter}}</p>
        <h2 >Highest Score:</h2>
        <p>{{highestScoreFromStorage}}</p>

        <button @click="highScore">Hide Score</button>
    </div>
</template>

<script>
    export default {
        name: "HighScore",
        data() {
            return {
                highestScore: JSON.parse(window.localStorage.getItem('High Score')),
            }
        },
        methods: {
            highScore() {
                this.$store.commit('changeStateMachine', "StartMenu");
            }
        },
        computed: {
            scoregetter() {
                return this.$store.getters.scoreGetter;
            },
            highestScoreFromStorage(){
                return this.highestScore;

            }
            
        },
    }
</script>

<style scoped>
h2{
    font-size: 125%;
    color: #1e62d0;
    text-shadow:5px 2px 1px #8CCE9A;
    font-family: Georgia, serif;
    font-size: 35px;
    letter-spacing: 1.4px;
    word-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
}
p{
    font-size: 200%;
    color: #21963a;
    text-shadow: #eceaea 1px 1px 0;
}
button{
    width: 20% ;
    height: 95px ;
    margin:50px;
	box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom,  #79bbff 5%, #378de5 100%);
	background-color:#79bbff;;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:35px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc9f52;
}
.button:hover {
	background:linear-gradient(to bottom,  #378de5 5%, #79bbff 100%);
	background-color:#378de5;
}
.button:active {
	position:relative;
	top:1px;
}

</style>