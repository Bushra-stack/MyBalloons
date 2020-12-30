
<template>
    <div >
        <input type="range" id="speed" name="speed" 
         min="100" max="2000" value="300" step="100">
        <label for="speed">Speed</label>

        <input type="range" id="amount" name="amount" 
         min="0" max="30" value="10" step="1">
        <label for="amount">Amount</label>

        <button @click="backFromSetting">Back</button>
        <button @click="saveSetting">Save</button>
    </div>
    
    
</template>

<script>
    export default {
        name: "settings",
        methods: {
            backFromSetting(){
                this.$store.commit('backFromSettings');
                console.log("back from Setting "+ this.$store.state.settingsOn);
            },
            saveSetting(){
                var speedValue = document.getElementById("speed").value;
                var amountValue = document.getElementById("amount").value;
                this.$store.commit('saveSettings', {speed: speedValue , amount: amountValue});
            }   
        },
    }
</script>

<style lang="scss" scoped>

</style>