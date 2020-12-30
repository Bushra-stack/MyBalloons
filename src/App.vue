<template>
  <div id="app">
    <WebGazer @update="onUpdate" :off="true" />

    <StartMenu
      v-if="!startTheGameBoolean && !highScoreBoolean"
      :startTheGame="startTheGameBoolean"
      :setting="settingBoolean"
      :highScore="highScoreBoolean"
      @gameStarted="startTheGameBoolean=$event"
      @highScoreOn="highScoreBoolean=$event"
    />

    <section v-else-if="startTheGameBoolean">
      <button @click="startTheGameBoolean=false; newY=false">pause the game</button>
      <button @click="stopTheGame">finish the game</button>
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

    </section>

    <section v-else-if="highScoreBoolean">
      <p >Score={{score}}</p>
      <button @click="highScoreBoolean=false">hide Score</button>
    </section>

  </div>
</template>

<script>
import WebGazer from "@/components/WebGazer.vue";
import StartMenu from "@/components/StartMenu.vue";
import Balloon from "@/components/Balloon.vue";
import Init from "@/util/init.js";
//import {hello} from "@/util/init.js";

export default {
  name: "App",
  components: {WebGazer, Balloon, StartMenu },
  data() {
    return {
      list: [
        { x: 0, y: 0, color: "red" },
      ],
      colorList: Init.colorList,
      x_wg: 0,
      y_wg: 0,
      score: 0,
      startTheGameBoolean: false,
      settingBoolean: false,
      highScoreBoolean: false,
      newY: true,
    };
  },
  created () {
    console.log(this.amountgetter);
    var i = 0;
    var j = i;
    for(i ; i < this.amountgetter;  i++){
      var w =window.innerWidth - 75;
      this.list.splice(this.list.length, 0 ,{ x: Init.random(50,w), y: 0, color: this.colorList[j] });
      j < 20 ? j++ : 0;
    }
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
    updateY(index){
        console.log(index);
        this.list[index].y=this.list[index].y + 50;
    },
    stopTheGame(){
      //this.unmount();
    },
    getRandomY(index){
      if(this.newY){
        this.list[index].y= Init.random(-250, 100);// (min,max)
      }
    },
  },
  computed: {
    amountgetter(){
      return this.$store.getters.amountGetter;
    },
  },
  mounted () {
    //Init.hello();
    //hello();
  },

};
</script>

<style scoped >
</style>
