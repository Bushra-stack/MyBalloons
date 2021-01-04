import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    speed: 500,
    amount: 10,
    score:0,
    stateMachine: "StartMenu",
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
  },
  actions: {
  },
  modules: {
  }
})
