<template>
    <div>
        
    </div>
</template>

<script>
import webgazer from "webgazer";
    export default {
        name: "WebGazer",
        props: {
            off: {
                type: Boolean,
                default: false,
            },
        },
        data : function(){
            return {
                x: 0,
                y: 0,
            };
        },
        computed: {
            eyetrackinggetter() {
                return this.$store.getters.eyetrackingGetter; 
            },
        },
        methods: {

        },
        async created() {
           // if (window && !this.off) {
            if (window && this.off){
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
            }
        },
        beforeUpdate () {
            console.log("off befor update  "+this.off);
        },
        updated () {
            
        },
        beforeDestroy() {
            console.log("before Destroy "+this.off);
            window.applyKalmanFilter= false;           
            webgazer.params.showVideoPreview = false; 
            webgazer.showPredictionPoints(false); 
            webgazer.end();
            console.log("end");
        },
    }
</script>

<style lang="scss" scoped>

</style>