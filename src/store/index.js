import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    speed: 500,
    amount: 10,
    score:0,
    lives:3,
    stateMachine: "StartMenu",
    eyetracking: "Default",
    counterColorList: 0,
    accessibleColor: false,
    gameOver: false,
    timeForEyetracking:0,
  },
  getters: {
    stateMachineGetter: state => {
      return state.stateMachine;
    },
    speedGetter: state => {
      return state.speed;
    },
    amountGetter: state => {
      return state.amount;
    },
    scoreGetter: state => {
      return state.score;
    },
    livesGetter: state => {
      return state.lives;
    },
    eyetrackingGetter: state => {
      return state.eyetracking;
    },
    counterColorListGetter: state => {
      return state.counterColorList;
    },
    accessibleColorGetter: state => {
      return state.accessibleColor;
    },
    gameOverGetter: state=>{
      return state.gameOver;
    },
    timeForEyetrackingGetter: state =>{
      return state.timeForEyetracking;
    },

  },
  mutations: {
    changeStateMachine(state, payload){
      state.stateMachine=payload;
      console.log(`New State Machine is ${state.stateMachine}`);
    },
    saveSettings(state, payload){
      state.speed= payload.speed; 
      state.amount=payload.amount;
      console.log("save Setting "+ state.speed);
      console.log("save Setting "+ state.amount);
    },
    incrementScore(state){
      state.score++;
    },
    decrementLives(state){
      state.lives--;
    },
    resetScore(state){
      state.score=0;
    },
    resetLives(state){
      state.lives=3;
    },
    changeEyetracking(state, payload){
      state.eyetracking=payload.value;
      console.log(`Eyetracking is ${state.eyetracking}`);
      if (this.eyetrackinggetter === 'WebGazer'){
        state.timeForEyetracking = 6;
      }else if (this.eyetrackinggetter === 'GazeCloud'){
        state.timeForEyetracking = 11;
      }
    },
    incrementCounterColorList(state){
      if(state.accessibleColor){
        if(state.counterColorList>=7){
          state.counterColorList = 0 ;
          console.log(" accessibleColor counterColorList:  "+ this.counterColorList);
        }else{ 
          state.counterColorList++;
          console.log("counterColorList:  "+ this.counterColorList);
        }
      }else{
        if(state.counterColorList >= 29){
          state.counterColorList=0;
        }else{
          state.counterColorList++;
        }
      }
    },
    changeColorList(state, payload){
      state.accessibleColor=payload.value;
      console.log(`AccessibleColorList is ${state.accessibleColor}`)
    },
    end_startGame(state, payload){
      state.gameOver=payload.value;
      console.log(`Game is ${state.gameOver}`)
    }
  },
  actions: {
  },
  modules: {
  }
})
