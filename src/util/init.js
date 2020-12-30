function hello(){
    console.log("hello");
}
function bye(){
    console.log("bye");
}
function random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);    
    //The maximum is inclusive and the minimum is inclusive
}
const colorList = [
    "yellow",
    "skyblue",
    "maroon",
    "fuchsia",
    "orange",
    "cyan",
    "pink",
    "green",
    "blue",
    "brown",
    "chartreuse",
    "indigo",
    "DarkSlateBlue",
    "Coral",
    "Chocolate",
    "Gold",
    "MediumBlue",
    "SlateGray",
    "Magenta",
    "FireBrick",
  ]
export default { hello, bye, random, colorList}
//module.exports={ hello, bye}