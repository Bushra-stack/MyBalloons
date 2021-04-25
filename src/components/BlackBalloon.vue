<template>
    <div
        ref="blackBalloon"
        class="blackBalloon"
        v-bind:id="index"
        v-bind:style="{
        background: color,
        left: `${x}px`,
        bottom: `${y}px`,
        }"
        @click="$emit('balloon-click', index)"
    >
    </div>
</template>

<script>
    export default {
        name: "BlackBalloon",
        props: {
            x: {
                type: Number,
                default: 0,
            },
            y: {
                type: Number,
                default:0,
            },
            color: {
                type: String,
                default: "black",
            },
            index: {
                type: Number,
                required: true,
            }
        },
        data() {
            return {
                intervalID: 0,
                animationFrameId: 0,
                clockwise: true,
            };
        },
        methods: {
            update(index) {
                this.$emit('updatePosBlack',index);
            } 
        },
        computed: {
            speedgetter(){
                return this.$store.getters.speedGetter;
            }
        },
        created() {
           // index this.$emit('randomY',index);
            //console.log("speedgetter "+ this.speedgetter);
            this.intervalID = window.setInterval(this.update, this.speedgetter);    
        },
        beforeDestroy() {
            window.clearInterval(this.intervalID);
        },
    };
</script>

<style scoped>
@keyframes rotatefeatured {
    0%    { transform: rotate(0deg);}
    25%    { transform: rotate(7deg);}
    50%   { transform: rotate(0deg);}
    75%    { transform: rotate(-5deg);}

    100%  { transform: rotate(-0deg);}
}
div {
  width: 85px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  box-shadow:inset -10px -10px 0 rgba(0,0,0,0.07);
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;
  animation: rotatefeatured 3s infinite;
}
.blackBalloon:after {
  content:"▲";
  font-size:22px;
  color:rgb(0, 0, 0);
  opacity: 75%;
  display:block;
  text-align:center;
  width:110%;
  position:absolute;
  bottom:-12px; 
 
}
.blackBalloon:before {
  /*content: "\274C";*/
  content: ' \271E';
  color:tomato;
  font-size:40px;
  opacity: 100%;
  display:block;
  text-align:center;
  width:100%;
  position:absolute;
  bottom:+40px; 
}

</style>
