import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    speed: 500,
    amount: 10,
    score:0,
    stateMachine: "StartMenu",
    eyetracking: false,
    counterColorList: 0,
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
    eyetrackingGetter: state => {
      return state.eyetracking;
    },
    counterColorListGetter: state => {
      return state.counterColorList;
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
    resetScore(state){
      state.score=0;
    },
    changeEyetracking(state, payload){
      state.eyetracking=payload.value;
      console.log(`Eyetracking is ${state.eyetracking}`);
    },
    incrementCounterColorList(state){
      if(state.counterColorList >= 29){
        state.counterColorList=0;
      }else{
        state.counterColorList++;
      }
      console.log("the counter"+ state.counterColorList);
    },
  },
  actions: {
  },
  modules: {
  }
})
