
<template>
    <div>
        <input type="range" id="geschwindigkeit" name="geschwindigkeit" 
         min="0" max="10" value="3" step="1">
        <label for="geschwindigkeit">Geschwindigkeit</label>
    </div>
</template>

<script>
    export default {
        name: "settings",
        props: {
            geschwindigkeit: {
                type: Number,
                default: 3,
            },
        },
        vuex: {
            getters: {
                counters: state => state.counters
            },
            actions: actions
        },
        computed: {
            currentGeschwindigkeit() { return this.counters[this.geschwindigkeit] }
        },  
    }
</script>

<style lang="scss" scoped>

</style>