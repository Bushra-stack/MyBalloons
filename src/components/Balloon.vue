<template>
  <div
    ref="balloon"
    class="balloon"
    v-bind:style="{
    background: color,
    left: `${x}px`,
    bottom: `${y}px`,
    }"
    @click="$emit('balloon-click', index)"
  >
    {{ x }}/{{ y }}
  </div>
</template>

<script>
export default {
  name: "Balloon",
  props: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
    //default: Math.floor(Math.random() * (Math.floor(0) - Math.floor(-10) + 1)  -10),
      default:0,
    },
    color: {
      type: String,
      default: "red",
    },
    index: {
      type: Number,
      required: true,
    },
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
      //console.log("update method");
    },
  },
  computed: {
    speedgetter(){
      return this.$store.getters.speedGetter;
    }
  },
  created(index) {
      this.$emit('randomY',index);
      console.log("speedgetter "+ this.speedgetter);
      this.intervalID = window.setInterval(this.update, this.speedgetter);    
  },
  beforeUpdate () {
    //console.log("before Update Life Cycle");
  },
  updated () {
   // console.log("updated Life Cycle");
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
  content:"▲";
  font-size:20px;
  color:hsl(215,30%,50%);
  display:block;
  text-align:center;
  width:100%;
  position:absolute;
  bottom:-12px; 
  z-index:-100;
}


</style>
