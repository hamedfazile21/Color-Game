const colorButton = document.getElementById("colorButton")
const body = document.querySelector("body")

let colorsR = Math.random()*225;
let colorsG = Math.random()*225;
let colorsB = Math.random()*225;

colorButton.addEventListener("mousemove", function(){
    colorsR = Math.random()*225
    colorsG = Math.random()*225
    colorsB = Math.random()*225
    body.style.backgroundColor = `rgb(${colorsR},${colorsG},${colorsB})`

    colorButton.style.backgroundColor = "white"
})

colorButton.addEventListener("mouseout" , function(){
    body.style.backgroundColor = "white"
})