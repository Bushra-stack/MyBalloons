<template>
    <div
        refs="startMenu"
        class="startMenu"
        
    >
        <button @click="startGame" >Start The Game</button>
        <button @click="goToSetting">Setting</button>
        <button @click="showHighScore">High Score </button>
    </div>
</template>

<script>
import store from "@/Settings.vue"
    export default {
        name:"StartMenu",
        props: {
            startTheGame:{
                type: Boolean,
                default: false,
            },
            setting:{
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
            },
            goToSetting(){

            },
            showHighScore(){
                this.$emit('highScoreOn',true);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>