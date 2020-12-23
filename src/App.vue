<template>
  <div id="app">
    <WebGazer @update="onUpdate" :off="true" />
   
    <StartMenu  
      v-if="!startTheGameBoolean"
      :startTheGame="startTheGameBoolean"
      :setting="settingBoolean"
      :highScore="highScoreBoolean"
      @gameStarted="startTheGameBoolean=$event"
      @highScoreOn="highScoreBoolean=$event"
    />

    <section v-else-if="startTheGameBoolean">
      <button @click="startTheGameBoolean=false">finish the game</button>
      <Balloon
        v-for="(item, index) of list"
        :key="index"
        :x="item.x"
        :y="item.y"
        :color="item.color"
        :index="index"
        @balloon-click="onBalloonClick"
        @updatePos="updateY"
      />
    </section>
    <section v-if="highScoreBoolean">
      <p >Score={{score}}</p>
      <button @click="highScoreBoolean=false">hide Score</button>
    </section>
    
  </div>
</template>

<script>
import WebGazer from "@/components/WebGazer.vue";
import StartMenu from "@/components/StartMenu.vue";
import Balloon from "@/components/Balloon.vue";
import {hello} from "@/util/init.js";

export default {
  name: "App",
  components: {WebGazer, Balloon, StartMenu },
  data() {
    return {
      list: [
        { x: 0, y: 0, color: "red" },
        { x: 90, y: 0, color: "blue" },
        { x: 190, y: 0, color: "green" },
        { x: 290, y: 0, color: "pink" },
        { x: 370, y: 0, color: "cyan" },
        { x: 460, y: 0, color: "orange" },
      ],
      x_wg: 0,
      y_wg: 0,
      score: 0,
      startTheGameBoolean: false,
      settingBoolean: false,
      highScoreBoolean: false,

      
    };
  },
  methods: {
    onUpdate(coord) {
      this.x_wg = coord.x;
      this.y_wg = coord.y;
      console.log('This is X-Value:',this.x_wg);
      console.log('This is Y-Value:',this.y_wg);
    },
    onBalloonClick(index) {
      this.list.splice(index, 1);
      this.score++;
      //console.log(this.list);
    },
    updateY(){

      for (var i = 0; i < this.list.length; i++) {
        this.list[i].y=this.list[0].y+ 2.5;
      } 
    },
    startPlaying(){
     // this.startTheGameBoolean =true;
    },
    stopPlaying(){
      //this.startTheGameBoolean=false;
    }
  },
  mounted () {
    hello();
  },
  
};
</script>

<style scoped >
#app {
}



</style>
