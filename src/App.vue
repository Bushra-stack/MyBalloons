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
      <button @click="pauseTheGame">pause the game</button>
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
      <p >Current Score={{score}}</p>
      <p >Highest Score={{highestScore}}</p>

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
      highestScore: 0,
      startTheGameBoolean: false,
      settingBoolean: false,
      highScoreBoolean: false,
      newY: true,
      amountFromComputed: 2,
      windowWidth: window.innerWidth,
    };
  },
  created () {
    if((JSON.parse(window.localStorage.getItem('high Score'))) == null){
      window.localStorage.setItem('high Score', this.score);
    }else {
      console.log("vorhanden "+ JSON.parse(window.localStorage.getItem('high Score')));
      this.highestScore = JSON.parse(window.localStorage.getItem('high Score'));
      
    }
    console.log(this.amountgetter);
    var i = 0;
    for(i ; i < (this.amountgetter - 1);  i++){
      this.list.splice(this.list.length, 0 ,{ x: Init.random(50,this.windowWidth), y: 0, color: this.colorList[i] });

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
      if(JSON.parse(window.localStorage.getItem('high Score'))<this.score){
        window.localStorage.setItem('high Score', this.score);
      }
      //console.log(this.list);
    },
    updateY(index){
      if(this.list.length == this.amountgetter){
        console.log(this.list.length);
        console.log(this.amountgetter);
        console.log(index);
        this.list[index].y=this.list[index].y + 50;
      }else {
        this.updateList();
      }
     
    },
    pauseTheGame(){
      this.startTheGameBoolean=false; 
      this.newY=false; 
      //window.localStorage.setItem('high Score', this.score);
    },
    stopTheGame(){
      //this.unmount();
    },
    updateList(){
      var diff= 0;
      if(this.list.length > this.amountgetter){
        //delete vue.delete??
        diff = this.list.length -this.amountgetter
        this.list.splice(this.amountgetter, diff);
        console.log("größer"+this.list.length);
      }else if (this.list.length < this.amountgetter){
        //add vue.set??
        this.list.splice(this.list.length, 0, { x: Init.random(50,this.windowWidth), y: Init.random(-250, 100), color: this.colorList[this.list.length-1] } );
        console.log("kleiner"+this.list.length);
      }

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
