<template>
  <div id="app">
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
    <beforeCali  v-if= "stateMachinegetter === 'beforeCali'"/>
    <Calibration v-if= "stateMachinegetter === 'Calibration'"/>
    <afterCali  v-if= "stateMachinegetter === 'afterCali'"/>

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
import beforeCali from "@/components/beforeCali.vue";
import Calibration from "@/components/Calibration.vue";
import afterCali from "@/components/afterCali.vue";
import HighScore from "@/components/HighScore.vue";


//import Init from "@/util/init.js";
//import {hello} from "@/util/init.js";

export default {
  name: "App",
  components: {WebGazer, GazeCloud, StartMenu, Game, GameSettings, beforeCali, Calibration, afterCali, HighScore},
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
#app{
  z-index: -100;
  height: 100%;
  width: 100%;
}
#game-score{
  position: absolute;
  top:0;
  right: 0;
}
</style>
