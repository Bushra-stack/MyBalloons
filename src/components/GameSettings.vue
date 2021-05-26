<template>
    <div id="settings">
        <label id="speedLabel" for="speed">Speed</label>
        <p>{{speedOfInput }}</p>
        <input v-model="speedOfInput" type="range" id="speed" name="speed" 
         min="1" max="5" value="3" step="1" >

        <label for="amount">Amount</label>
        <p>{{amountValue}}</p>
        <input  v-model="amountValue" type="range" id="amount" name="amount" 
         min="5" max="30" value="10" step="1">
        
        <p id="control">Control with:</p>
        <label class="control" for="mouse">Mouse</label>
        <input class="control" type="radio" id="mouse" name="control" value="mouse" checked >
        <label class="control" for="webGazer">WebGazer</label>
        <input class="control" type="radio" id="WebGazer" name="control" value="WebGazer">
        <label class="control" for="GazeCloud">GazeCloud</label>
        <input class="control" type="radio" id="GazeCloud" name="control" value="GazeCloud"><br/>
      
        <label for="color">Adapt Color <input type="checkbox" id="color" name="color" value="false"/>  </label><br>
           
        
        <button @click="backFromSetting" id="backButton">Back</button>
        <button @click="saveSetting" id="saveButton">Save</button>
    </div>    
</template>

<script>
    export default {
        name: "settings",
        props: {
            xWG: {
                type: Number,
                default: 0,
            },
            yWG: {
                type: Number,
                default: 0,
            },  
        },
        data() {
            return {
                saveCounter: 0,
                backCounter: 0,
                speedOfInput: 4,
                amountValue: 7,
            }
        },
        methods: {
            backFromSetting(){
                this.$store.commit('changeStateMachine', "StartMenu");
            },
            saveSetting(){
                 var eyetracking= "Default";
                if(document.getElementById('WebGazer').checked){
                    eyetracking= "WebGazer";
                }
                if(document.getElementById('GazeCloud').checked){
                    eyetracking= "GazeCloud";
                }
                console.log("eyetracking in game settings" + eyetracking);
                this.$store.commit('changeEyetracking', {value: eyetracking});
                var speedValue = (50 - (this.speedOfInput * 10 )) + 20;
                this.$store.commit('saveSettings', {speed: speedValue , amount: this.amountValue});
                var accessibleColor = document.getElementById('color').checked ? true : false;
                this.$store.commit('changeColorList', {value: accessibleColor});
            },
        },
        computed: {
            xWG_yWG(){
                return `${this.xWG}|${this.yWG}`;
            },
            eyetrackinggetter(){
                return this.$store.getters.eyetrackingGetter;
            },
            timeForEyetrackinggetter(){
                return this.$store.getters.timeForEyetrackingGetter;
            },
            btnSave(){
                let btnSAVE = document.getElementById("saveButton");
                return btnSAVE.getBoundingClientRect();
            },
            btnBack(){
                let btnBACK = document.getElementById("backButton");
                return btnBACK.getBoundingClientRect();
            },
        },
        watch: {
            xWG_yWG(newValue) {
                const [newxWg, newyWg] = newValue.split('|');
                    if(newxWg<=this.btnSave.right && newxWg>=this.btnSave.left && newyWg<=this.btnSave.bottom && newyWg>=this.btnSave.top ){
                        this.saveCounter++;
                        this.backCounter--;
                    }
                    if(newxWg<=this.btnBack.right && newxWg>=this.btnBack.left && newyWg<=this.btnBack.bottom && newyWg>=this.btnBack.top ){
                        this.saveCounter--;
                        this.backCounter++;
                    }
                    document.getElementById("saveButton").style.opacity = `${1 - (this.saveCounter /(this.timeForEyetrackinggetter +2))}`;
                    document.getElementById("backButton").style.opacity = `${1 - (this.backCounter /(this.timeForEyetrackinggetter +2))}`;
                    if(this.saveCounter >= this.timeForEyetrackinggetter){
                        this.saveCounter=0;
                        this.backCounter=0;
                        this.saveSetting();
                    }
                    if(this.backCounter >= this.timeForEyetrackinggetter){
                        this.saveCounter=0;
                        this.backCounter=0;
                        this.backFromSetting();
                    }
            },
        }
    }
</script>

<style scoped>
p{
    font-size: 140%;
    color: #0e8328;
    font-weight: bold;
    text-shadow: #eceaea 2px 1px 0px;
}

input[type=range]{
    display: block;
    margin: 10px  auto 20px auto ;
    width: 40%;
}
input[type=checkbox],
    input[type=radio] {
    vertical-align: middle;
    position: relative;
    bottom: 1px;
    margin: 20px  auto 20px auto ;

}
label{
    font-size: 125%;
    color: #164faa;
    text-shadow: #eceaea 2px 2px 1px;
    font-family: Georgia, serif;
    font-size: 35px;
    letter-spacing: 1.4px;
    word-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
    margin: 150px auto 55px auto ;
    padding:200px auto 0px auto;
}


#control{
    font-size: 125%;
    color: #164faa;
    text-shadow: #eceaea 2px 2px 1px;
    font-family: Georgia, serif;
    font-size: 35px;
    letter-spacing: 1.4px;
    word-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
    margin: 50px auto 40px auto ;

}
#settings{

}
#saveButton {
    width: 25% ;
    height: 85px ;
	box-shadow:inset 0px 1px 0px 0px #d9fbbe;
	background:linear-gradient(to bottom,  #b8e356 5%, #237c23 100%);
	background-color:#b8e356;
	border-radius:6px;
	border:1px solid #83c41a;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:32px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #86ae47;
    padding:10px 10px 10px 10px;
    margin: 20px 40px 20px 50px ;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
}
#saveButton:hover {
	background:linear-gradient(to bottom, #237c23  5%, #b8e356 100%);
	background-color:#a5cc52;
}
#saveButton:active {
	position:relative;
	top:1px;
}
#backButton {
    width: 25% ;
    height: 85px ;
	box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom,  #79bbff 5%, #014870 100%);
	background-color:#79bbff;;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:32px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc9f52;
    padding:10px 10px 10px 10px;
    margin: 20px 40px 20px 50px ;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
}
#backButton:hover {
	background:linear-gradient(to bottom,  #378de5 5%, #79bbff 100%);
	background-color:#378de5;
}
#backButton:active {
	position:relative;
	top:1px;
}   
#color{
    width:50px;
    height:50px;
    margin: 40px  auto 20px auto ; 
}
.control{
    font-family: unset;
    font-size: unset;
    letter-spacing: unset;
    word-spacing: unset;
    font-weight: unset;
    text-transform: unset;
    font-size: 140%;
    font-weight: bold;
    color: #0e8328;
    text-shadow: #eceaea 1px 1px 0;
    height: 15px;
    width: 15px;
    vertical-align: middle;
    margin: 50px  auto 30px auto ; 
}
.control input{
    height: 20px;
    width: 20px;
    vertical-align: middle;
    margin: 50px  auto 30px auto ; 

}
</style>