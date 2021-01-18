<template>
  <div id="app">
    <!-- <div
    ref="balloon"
    class="balloon"
    v-bind:style="{
    width: `${100}px`, x
    height: `${120}px`, y
    border: `${5}px solid red`,
    position: `absolute`,
    background: `black`,
    left: `${50}px`, x
    bottom: `${23}px`, y
    }"
    > 
    </div> -->
    <WebGazer @update="onUpdate"  /> 
    <GazeCloud @update="onUpdate"  /> 
    <!-- <WebGazer v-if="eyetrackinggetter" @update="onUpdate" /> -->
    <!-- <WebGazer v-if="off" @update="onUpdate" :off="off"/> -->

    <StartMenu v-if= "stateMachinegetter === 'StartMenu'" :xWG="x_wg" :yWG="y_wg" />
    <section v-if= "stateMachinegetter === 'GameStarted' || stateMachinegetter === 'GamePaused'" >
      <Game :xWG="x_wg" :yWG="y_wg"/>
    </section>

    <section v-if= "stateMachinegetter === 'SettingSelected'">
      <!-- <GameSettings @changeControl="changeTheControl"/> -->
      <GameSettings :xWG="x_wg" :yWG="y_wg"/>
    </section>

    <section  v-if= "stateMachinegetter === 'HighScore'">
      <HighScore :xWG="x_wg" :yWG="y_wg"/>
    </section>

  </div>
</template>

<script>
import WebGazer from "@/components/WebGazer.vue";
import GazeCloud from "@/components/GazeCloud.vue";
import StartMenu from "@/components/StartMenu.vue";
import Game from "@/components/Game.vue";
import GameSettings from "@/components/GameSettings.vue";
import HighScore from "@/components/HighScore.vue";
//import Init from "@/util/init.js";
//import {hello} from "@/util/init.js";

export default {
  name: "App",
  components: {WebGazer, GazeCloud, StartMenu, Game, GameSettings, HighScore},
  data() {
    return {
      x_wg: 0,
      y_wg: 0,
      highestScore: 0,
      off: false,
    };
  },
  methods: {
    onUpdate(coord) {
      this.x_wg = coord.x;
      this.y_wg = coord.y;
      // console.log('This is X-Value:',this.x_wg);
      // console.log('This is Y-Value:',this.y_wg);
    },
    changeTheControl(value){
      this.off = value;
      console.log('changeTheControl ' + value);
    },
  },
  
  computed: {
    stateMachinegetter(){
      return this.$store.getters.stateMachineGetter;
    },
    eyetrackinggetter() {
      return this.$store.getters.eyetrackingGetter; 
    }
  },

  mounted () {
  },
};
</script>

<style scoped >
#game-score{
  position: absolute;
  top:0;
  right: 0;
}
</style>
