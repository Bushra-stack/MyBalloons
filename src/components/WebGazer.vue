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
        async created() {
            if (window && !this.off) {
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
        beforeDestroy() {
            webgazer.end();
        },
    }
</script>

<style lang="scss" scoped>

</style>