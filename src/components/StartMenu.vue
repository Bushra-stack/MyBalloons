<template>
    <div
        refs="startMenu"
        class="startMenu"
    >
        <button v-if="!isSettingOn" @click="startGame" >Start The Game</button>
        <button v-if="!isSettingOn" @click="goToSetting">Setting</button>
        <GameSettings v-else-if="isSettingOn" />
        <button v-if="!isSettingOn" @click="showHighScore">High Score </button>
    </div>
</template>

<script>
import GameSettings from './GameSettings.vue';
//import { mapGetters } from 'vuex'
    export default {
        name:"StartMenu",
        components: {GameSettings},
        props: {
            startTheGame:{
                type: Boolean,
                default: false,
            },
            highScore:{
                type: Boolean,
                default: false,
            },
        },
        methods:{
            startGame(){
                //this.startTheGame=true;
                this.$emit('gameStarted',true);
               // this.$store.commit('backFromSettings');
            },
            goToSetting(){
                this.$store.commit('goToSettings');
                console.log("go to Setting "+ this.$store.state.settingsOn); 
            },
            showHighScore(){
                this.$emit('highScoreOn',true);
                this.$store.commit('backFromSettings');
            },  
        },
        computed: {
            isSettingOn(){
                return this.$store.getters.isSettingsOn
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>