<template>

<div id ="gazeCloudDot"  :style="style" style="display: block; position: fixed; z-index: 99999; left: -5px; top: -5px; background: red; border-radius: 100%; opacity: 0.7; width: 10px; height: 10pxpx;">

</div>
</template>

<script>
    export default {
        name: "GazeCloud",
        data(){
            return {
                x: 0,
                y: 0,
            };
        },
        computed: {
            style () {
                console.log(this.x, this.y);
                return { transform: 'translate3d(' +this.x +'px, '+ this.y +'px, 0px)'};
            },
            eyetrackinggetter() {
                return this.$store.getters.eyetrackingGetter; 
            },
        },
        created() {
        },
        methods: {
            integrate() {
                if(window.GazeCloudAPI){
                    const thiz = this;
                    window.GazeCloudAPI.StartEyeTracking();
                    window.GazeCloudAPI.UseClickRecalibration = true;
                    window.GazeCloudAPI.OnCalibrationComplete =function(){
                        console.log("Calibration complete");
                        window.GazeCloudAPI.OnResult = function(GazeData) {
                        //console.log("$$$$$RESULTSW in COMPLETE $$$$$$$$$$$$$");
                        //thiz.updateGazeData(GazeData);
                        console.log("DATA: ", GazeData);
                            thiz.x = GazeData.GazeX;
                            thiz.y = GazeData.GazeY;
                            thiz.$emit("update", {x: GazeData.GazeX, y: GazeData.GazeY});

                        };
                    };
                }  
            }
        },
        watch: {
            eyetrackinggetter(newValue) {
                if(newValue === "GazeCloud"){
                    this.integrate();
                } else {
                    window.GazeCloudAPI.StopEyeTracking();
                }
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>