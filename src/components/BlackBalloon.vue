<template>
    <div>
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
            this.$emit('updatePos',index);
            if(this.clockwise){
                this.$refs.balloon.style.transform = "rotate(5deg)"; 
            }else{
                this.$refs.balloon.style.transform = "rotate(-5deg)"; 
            }
            this.clockwise=!this.clockwise;
            },
        },
        computed: {
            speedgetter(){
                return this.$store.getters.speedGetter;
            }
        },
        created(index) {
            this.$emit('randomY',index);
            //console.log("speedgetter "+ this.speedgetter);
            this.intervalID = window.setInterval(this.update, this.speedgetter);    
        },
        beforeDestroy() {
            window.clearInterval(this.intervalID);
        },
    };
</script>

<style scoped>
div {
  width: 100px;
  height: 120px;
  position: absolute;
  border-radius: 50%;
  box-shadow:inset -10px -10px 0 rgba(0,0,0,0.07);
}

.balloon:before {
  content:"▲";  /* X */
  font-size:20px;
  color:rgb(0, 0, 0);
  display:block;
  text-align:center;
  width:100%;
  position:absolute;
  bottom:-12px; 
  z-index:-100;
}


</style>
