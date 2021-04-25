<template>
    <div>
        <div class="foo">
            <h1 >    Game Over!    </h1>
            <div id="center">
                <button id="stopButtonG"  @click="stopTheGameG">Upss!</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameOver",
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
                stopCounterG: 0,
            }
        },
        created(){
            this.$refs.foo.style.transform= "scale(2,5)";
        },
        methods: {
            stopTheGameG(){
                this.$store.commit('resetScore');
                this.$store.commit('resetLives');
                this.$store.commit('end_startGame', {value: false});
                this.$store.commit('changeStateMachine', "StartMenu");
            },
        },
        computed: {
            xWG_yWG(){
                return `${this.xWG}|${this.yWG}`;
            },
            eyetrackinggetter(){
                return this.$store.getters.eyetrackingGetter;
            },
            btnStopG(){
                let btnSTOPG = document.getElementById("stopButtonG");
                return btnSTOPG.getBoundingClientRect();
            },
        },
        watch: {
            xWG_yWG(newValue) {
                const [newxWg, newyWg] = newValue.split('|');
                if (this.eyetrackinggetter){
                    if(newxWg<=this.btnStopG.right && newxWg>=this.btnStopG.left && newyWg<=this.btnStopG.bottom && newyWg>=this.btnStopG.top ){
                        this.stopCounterG++;
                    }
                    if(this.stopCounterG>=7){
                        this.stopCounterG=0;
                        this.stopTheGameG();
                    }
                }
            }
        }
    }
</script>

<style scoped>
.foo {
position: absolute;
top: 0;
bottom: 0;
width: 100%;
height:100%;
margin: auto;
padding-top: 180px;

border: 5px solid #034441;
background-color: rgba(25, 83, 66, 0.95);
}
h1{
color: #4b0615;
text-shadow:5px 2px 1px #751c4f;
font-family: Georgia, serif;
font-size: 70px;
letter-spacing: 1.4px;
word-spacing: 0px;
font-weight: 700;
text-transform: capitalize;
}
#center{
display: flex;
justify-content: center;
align-items: center;
margin-top:50px;
height: 30%;
}
@keyframes zoominoutsinglefeatured {
    0% {
        transform: scale(1.1);
    }
    50% {
        transform: scale(1.75);
    }
    100% {
        transform: scale(1.1);
    }
}
#stopButtonG {
position: absoult;
font-size:30px;
font-weight:bold;
text-decoration:none;
text-shadow:0px 1px 0px #472e2e;
box-shadow:inset 0px 1px 0px 0px #fce2c1;
background:linear-gradient(to bottom,  #4b0615 5%, #a53474 100%);
background-color:#770313;;
border-radius:6px;
border:1px solid #1d0404;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
text-decoration:none;
padding:10px 10px 10px 10px;
margin: 10px auto 55px auto ;
overflow: hidden;
text-overflow: ellipsis; 
white-space: nowrap;
animation: zoominoutsinglefeatured 3s infinite;
}


</style>
   
     