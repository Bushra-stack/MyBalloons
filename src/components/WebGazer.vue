<template>
    <div>
    </div>
</template>

<script>
import webgazer from "webgazer";
    export default {
        name: "WebGazer",
        props: {
        },
        data : function(){
            return {
                x: 0,
                y: 0,
            };
        },
        async created() {
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
            async integrate(){
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
                webgazer.showFaceOverlay(true);
                webgazer.showPredictionPoints(true);
            },
        },
        watch: {
            eyetrackinggetter(newValue) {
                if(newValue === "WebGazer"){
                    this.integrate();
                } else {
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