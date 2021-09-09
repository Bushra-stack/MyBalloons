<template>
    <div ref="beforeCaliDiv">
        <h1> Calibartion of WebGazer </h1>
        <p>To complete the calibration of WebGazer you need to do the following: </p>
        <ul>
            <li>Click three times on each box </li>
            <li>While clicking on the boxes, you have to look simultaneously at the cursor </li>
        </ul>   
        <button @click="cali"> start calibration!</button>
    </div>
</template>

<script>
    export default {
        name: "beforeCali",
        methods: {
            cali() {
                this.$store.commit('changeStateMachine',"Calibration");
           }
       },
    }
</script>

<style scoped>
div {
width: 100%;
height:100%;
margin: auto;
border: 5px solid #034441;
background-color: rgba(25, 83, 66, 0.95);
}
h1 {
color: #33030d;
font-family: Georgia, serif;
font-size: 40px;
letter-spacing: 1.4px;
word-spacing: 0px;
font-weight: 700;
text-transform: capitalize;
}
p {
color: #33030d;
color: #110155;
font-size: 20px;
padding: 20px;
}
li {
color: #110155;
font-weight :bold;

}
button {
    width: 20% ;
    height: 12% ;
	box-shadow:inset 0px 1px 0px 0px #500414;
    background:linear-gradient(to bottom,  #4b0615 5%, #a53474 100%);
    background-color:#770313;
    border-radius:6px;
    border:1px solid #1d0404;   
	border-radius:6px;
	border:1px solid #33030d;
	display:inline-block;
	cursor:pointer;
	color:#ddb4b4;
	font-family:Arial;
	font-size:20px;
	text-decoration:none;
    font-weight: bold;
    padding:10px 10px 10px 10px;
    margin: 40px 40px 20px 50px ;
    overflow: hidden;
    text-overflow: ellipsis; 
    white-space: nowrap;
}
</style>

