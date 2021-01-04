<template>
    <div >
        <label for="speed">Speed</label>
        <p>{{speedOfInput }}</p>
        <input v-model="speedOfInput" type="range" id="speed" name="speed" 
         min="100" max="2000" value="300" step="100" >
        

        <label for="amount">Amount</label>
        <p>{{amountValue}}</p>
        <input  v-model="amountValue" type="range" id="amount" name="amount" 
         min="0" max="30" value="10" step="1">
        

        <button @click="backFromSetting" class="backButton">Back</button>
        <button @click="saveSetting" class="saveButton">Save</button>
    </div>    
</template>

<script>
    export default {
        name: "settings",
        data() {
            return {
                speedOfInput: 100,
                amountValue: 0,
            }
        },
        methods: {
            backFromSetting(){
                this.$store.commit('changeStateMachine', "StartMenu");
            },
            saveSetting(){
                var speedValuee = 2000 - this.speedOfInput +100 ;
                this.$store.commit('saveSettings', {speed: speedValuee , amount: this.amountValue});
            },
        },
        computed: {
            speedValue(){
                return  2000 - this.speedOfInput + 100;
            }
        },
    }
</script>

<style scoped>
p{
    font-size: 125%;
    color: #21963a;
    text-shadow: #eceaea 1px 1px 0;
}
input{
    display: block;
    margin: 10px  auto 15px auto ;
    width: 40%;
}
label{
    font-size: 125%;
    color: #1e62d0;
    text-shadow:5px 2px 1px #8CCE9A;
    font-family: Georgia, serif;
    font-size: 35px;
    letter-spacing: 1.4px;
    word-spacing: 0px;
    font-weight: 700;
    text-transform: capitalize;
}
.saveButton {
    width: 20% ;
    height: 95px ;
    margin:50px;
	box-shadow:inset 0px 1px 0px 0px #d9fbbe;
	background:linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
	background-color:#b8e356;
	border-radius:6px;
	border:1px solid #83c41a;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:35px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #86ae47;
}
.saveButton:hover {
	background:linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
	background-color:#a5cc52;
}
.saveButton:active {
	position:relative;
	top:1px;
}
.backButton {
    width: 20% ;
    height: 95px ;
    margin:50px;
	box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom,  #79bbff 5%, #378de5 100%);
	background-color:#79bbff;;
	border-radius:6px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:35px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc9f52;
}
.backButton:hover {
	background:linear-gradient(to bottom,  #378de5 5%, #79bbff 100%);
	background-color:#378de5;
}
.backButton:active {
	position:relative;
	top:1px;
}    
</style>