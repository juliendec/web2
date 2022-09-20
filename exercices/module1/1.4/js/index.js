const container = document.querySelector(".container");
const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const cube = document.querySelector(".cube");


startClock();

function startClock() {
    setInterval(redLight, 1000);
    setInterval(orangeLight, 2000);
    setInterval(greenLight, 3000);
}


function redLight(){
    red.style.backgroundColor = "red";
    orange.style.backgroundColor = "white";
    green.style.backgroundColor = "white";

    console.log("red")
}

function orangeLight(){
    red.style.backgroundColor = "white";
    orange.style.backgroundColor = "orange";
    green.style.backgroundColor = "white";
    console.log("orange")
}

function greenLight(){
    red.style.backgroundColor = "white";
    orange.style.backgroundColor = "white";
    green.style.backgroundColor = "green";
    console.log("green")
}
