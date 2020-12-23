<template>
  <!-- v-bind:id="`div-ballon-${index}`" -->
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
      default: 0,
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
    /*pos: {
        x: 0,
        y: 0,
      },*/
      clockwise: true,
      
    };
  },
  methods: {
    update() {
      // this.y = this.y + 2.5;
      // this.$emit('updatePos',this.y)
      this.$emit('updatePos');
      if(this.clockwise){
        this.$refs.balloon.style.transform = "rotate(10deg)"; 

      }else{
        this.$refs.balloon.style.transform = "rotate(-10deg)"; 

      }
      this.clockwise=!this.clockwise;
      console.log("update method");
      //this.animationFrameId = window.requestAnimationFrame(this.update);
      
      /* getElementById */
      // const div = window.getElementById("");
      /* refs */
      // const div = this.$refs.balloon;
      // const divRect = div.getBoundingClientRect();
      // const x = divRect.left;
      // const y = divRect.bottom;
      // console.log("LOG Ballon ", this.index, x, y);
    },
  },
  beforeUpdate () {
    console.log("before Update Life Cycle");
  },
  updated () {
    console.log("updated Life Cycle");
  },
  created() {
    //this.pos.x = this.x;
   // this.pos.y = this.y;
    this.intervalID = window.setInterval(this.update, 300);
   // this.animationFrameId = window.requestAnimationFrame(this.update);
  },
  beforeDestroy() {
    window.clearInterval(this.intervalID);
   //window.cancelAnimationFrame(this.animationFrameId);
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

.balloon {
   
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
