<template>
    <div >
        <label for="speed">Speed</label>
        <p>{{speedOfInput }}</p>
        <input v-model="speedOfInput" type="range" id="speed" name="speed" 
         min="100" max="2000" value="300" step="100" >

        <label for="amount">Amount</label>
        <p>{{amountValue}}</p>
        <input  v-model="amountValue" type="range" id="amount" name="amount" 
         min="1" max="30" value="10" step="1">
        
        <p id="control">Control with:</p>
        <label class="control" for="mouse">Mouse</label>
        <input class="control" type="radio" id="mouse" name="control" value="mouse" checked>
        <label class="control" for="eyetracking">Eyetracking</label>
        <input class="control" type="radio" id="eyetracking" name="control" value="eyetracking"><br/>
        
        <label for="color">Adapt Color</label><br>
        <input type="checkbox" id="color" name="color" value="false"/>    
        
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
                speedOfInput: 200,
                amountValue: 5,
            }
        },
        methods: {
            backFromSetting(){
                this.$store.commit('changeStateMachine', "StartMenu");
            },
            saveSetting(){
                var eyetracking= document.getElementById('eyetracking').checked ? true : false;
                console.log("eyetracking in game settings" + eyetracking);
                this.$store.commit('changeEyetracking', {value: eyetracking});
                var speedValuee = 2000 - this.speedOfInput +100 ;
                this.$store.commit('saveSettings', {speed: speedValuee , amount: this.amountValue});
                var accessibleColor = document.getElementById('color').checked ? true : false;
                this.$store.commit('changeColorList', {value: accessibleColor});
            },
        },
        computed: {
            speedValue(){
                return  2000 - this.speedOfInput + 100;
            },
            xWG_yWG(){
                return `${this.xWG}|${this.yWG}`;
            },
            eyetrackinggetter(){
                return this.$store.getters.eyetrackingGetter;
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
                if (this.eyetrackinggetter){
                    if(newxWg<=this.btnSave.right && newxWg>=this.btnSave.left && newyWg<=this.btnSave.bottom && newyWg>=this.btnSave.top ){
                        this.saveCounter++;
                        this.backCounter--;
                    }
                    if(newxWg<=this.btnBack.right && newxWg>=this.btnBack.left && newyWg<=this.btnBack.bottom && newyWg>=this.btnBack.top ){
                        this.saveCounter--;
                        this.backCounter++;
                    }

                    if(this.saveCounter >= 7){
                        this.saveCounter=0;
                        this.backCounter=0;
                        this.saveSetting();
                    }
                    if(this.backCounter >= 7){
                        this.saveCounter=0;
                        this.backCounter=0;
                        this.backFromSetting();
                    }
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
input{
    display: block;
    margin: 10px  auto 20px auto ;
    width: 40%;
}
label, #control{
    font-size: 125%;
    color: #164faa;
    text-shadow: #eceaea 2px 2px 1px;
    font-family: Georgia, serif;
    font-size: 35px;
    letter-spacing: 1.4px;
    word-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
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
    margin: 20px 30px 40px 30px ;
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
    margin: 20px 30px 40px 30px ;
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
    width:45px;
    height:45px;
    margin: 30px  auto 15px auto ; 
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
}
.control input{
     height: 15px;
        width: 15px;
        vertical-align: middle;
}
</style>