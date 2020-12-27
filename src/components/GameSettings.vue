
<template>
    <div >
        <input type="range" id="speed" name="speed" 
         min="0" max="10" value="3" step="1">
        <label for="speed">Speed</label>
        <input type="range" id="amount" name="amount" 
         min="0" max="30" value="10" step="1">
        <label for="amount">Amount</label>
    </div>
    
    
</template>

<script>
    export default {
        name: "settings",

        // props: {
        //     speed: {
        //         type: Number,
        //         default: 3,
        //     },
        // },
        // vuex: {
        //     getters: {
        //         counters: state => state.counters
        //     },
        //     actions: actions
        // },
        
        // },  
    }
</script>

<style lang="scss" scoped>

</style>