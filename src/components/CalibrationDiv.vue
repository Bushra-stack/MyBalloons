<template>
    <div ref="CDiv"
    class="CDiv"
    v-bind:id="index"
    @click="$emit('div-click', index)">
    </div>
</template>

<script>
    export default {
        name: "CalibrationDiv",
        props: {
            index: {
                type: Number,
                required: true,
            },
            counter: {
                type: Number,
                required: true,
            },
        },
    }
</script>

<style scoped>
div {
  border: 2px solid rgb(21, 54, 197);
  border-radius: 5px;  
  background-color: #0d709e;
  width: 20%;
  height: 20%; 
  margin: 1%;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
  opacity: 70%;
}
</style>

