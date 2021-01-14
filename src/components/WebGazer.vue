<template>
    <div>
        <!-- <button @click="toggle">Toggle</button> -->
    </div>
</template>

<script>
import webgazer from "webgazer";
    export default {
        name: "WebGazer",
        props: {
            // off: {
            //     type: Boolean,
            //     default: false,
            // },
        },
        data : function(){
            return {
                x: 0,
                y: 0,
            };
        },
        async created() {
            // if (window && this.off){
            //     const thiz = this;
            //     window.applyCalmanFilter = true;
            //     window.saveDataAccrossSessions = true;
            //     webgazer.params.showVideoPreview = true;
            //     await webgazer
            //         .setRegression("ridge")
            //          .setGazeListener(function(data) {
            //              if (data) {
            //                  thiz.x = data.x;
            //                  thiz.y = data.y;
            //                  thiz.$emit("update", { x: data.x, y: data.y });
            //              }
            //          })
            //         .begin();
            //     webgazer.showPredictionPoints(true);
            // }
        },
        beforeUpdate () {
        },
        updated () {
        },
        beforeDestroy() {
        },
        computed: {
            eyetrackinggetter() {
                return this.$store.getters.eyetrackingGetter; 
            },
        },
        methods: {
            async integrat(){
                const thiz = this;
                window.applyCalmanFilter = true;
                window.saveDataAccrossSessions = true;
                webgazer.params.showVideoPreview = true;
                await webgazer
                    .setRegression("ridge")
                     .setGazeListener(function(data) {
                         if (data) {
                             thiz.x = data.x;
                             thiz.y = data.y;
                             thiz.$emit("update", { x: data.x, y: data.y });
                         }
                     })
                    .begin();
                webgazer.showPredictionPoints(true);
            },
            // toggle(){
            //     this.$store.commit('changeEyetracking',{value: !this.eyetrackinggetter});
            //     if(this.eyetrackinggetter){
            //         this.integrat();
            //     }else{
            //         console.log("before Destroy "+this.off);
            //         window.applyKalmanFilter= false;           
            //         webgazer.params.showVideoPreview = false; 
            //         webgazer.showPredictionPoints(false); 
            //         webgazer.end();
            //         console.log("end");
            //     }
            // },
        },
        watch: {
            eyetrackinggetter(newValue) {
                if(newValue){
                    this.integrat();
                } else if(!newValue){
                    window.applyKalmanFilter= false;           
                    webgazer.params.showVideoPreview = false; 
                    webgazer.showPredictionPoints(false); 
                    webgazer.showFaceOverlay(false);
                    webgazer.showFaceFeedbackBox(false);
                    webgazer.end();
                    console.log("End of eyetracking");
                }
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>