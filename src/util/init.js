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
    "brown",//10
    "chartreuse",
    "indigo",
    "DarkSlateBlue",
    "Coral",
    "Chocolate",
    "Gold",
    "Crimson",
    "MediumBlue",
    "SlateGray",
    "Magenta",//20
    "FireBrick",
    "DarkSalmon",
    "SeaGreen",
    "SpringGreen",
    "SteelBlue",
    "CornflowerBlue",
    "PowderBlue",
    "Moccasin",
    "Orchid",
    "Aqua", //30 //don't need it
  ]
export default { hello, bye, random, colorList}
//module.exports={ hello, bye}