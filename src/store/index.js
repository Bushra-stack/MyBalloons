import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settingsOn:false,
    speed: 500,
    amount: 10,
  },
  getters: {
    isSettingsOn: state => {
      return state.settingsOn;
    },
    speedGetter: state => {
      return state.speed;
    },
    amountGetter: state => {
      return state.amount;
    },
  },
  mutations: {
    goToSettings(state){
      state.settingsOn=true;
    },
    backFromSettings(state){
      state.settingsOn=false;
    },
    saveSettings(state, payload){
      state.speed= payload.speed; 
      state.amount=payload.amount;
      console.log("save Setting "+ state.speed);
      console.log("save Setting "+ state.amount);
    }
  },
  actions: {
  },
  modules: {
  }
})
