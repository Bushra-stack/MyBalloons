<template>
    <div class="flex-container">
        <CalibrationDiv
        v-for="(item, index) of list"
        :key="index"
        :index="index"
        :counter="item.counter"
        @div-click="counterInc"
        />       
    </div>
</template>
 
<script>
import CalibrationDiv from "./CalibrationDiv.vue";

    export default {
        name:"Calibration",
        components: {CalibrationDiv},
        data() {
            return {
                list:[
                    {counter:0}
                ],
            }
        },
        created () {
            var i = 0;
            for(i ; i < 15;  i++){
                this.list.splice(this.list.length, 0 ,{counter:0});
            }
        },
        methods: {
            counterInc(index){
                this.list[index].counter++;
            },
            afterCali(){
                this.$store.commit('changeStateMachine', "afterCali");
            },
        },
        watch: {
            list :{
                handler(val) {
                   console.log(val.[1].counter);
                    for(var j =0; j<16;j++){
                        document.getElementById(j).style.opacity = `${0.7 + (this.list[j].counter /10)}`;
                    }
                    if(val.[0].counter && val.[1].counter && val.[2].counter && val.[3].counter && val.[4].counter && val.[5].counter && val.[6].counter && val.[7].counter && val.[8].counter && val.[9].counter && val.[10].counter && val.[11].counter && val.[12].counter && val.[13].counter && val.[14].counter && val.[15].counter >=3){
                    this.afterCali();
                    }
                },
                deep: true
            },
        },
    }
</script>
<style  scoped>
.flex-container {
     height: 100%; 
  display: flex;
  flex-flow: row wrap;
    justify-content: center;
   align-items: center;
  background-color:#DFEFA0;
}

</style>