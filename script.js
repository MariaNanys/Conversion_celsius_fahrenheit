let form = document.querySelector('#converter');
let celsius = document.querySelector('.celsius');
let fahrenheit = document.querySelector('.fahrenheit');
let result = document.querySelector('.result');
const btnConv = document.querySelector('.conv');
const btnReset = document.querySelector('.reset');
const btnChange = document.querySelector('.swap');
let formulaF = 0.0;
let formulaC = 0.0;


function convert() {
    if (form) {
        form.value.numbers;
    }
}

function reset() {
    form.value = "";
    result.textContent = "";
}

function swap() {  
    if(celsius.textContent === "°C") {
        celsius.textContent = "°F";
        fahrenheit.textContent = "°C";
        result.textContent = "";
        } else {
        celsius.textContent = "°C";
        fahrenheit.textContent = "°F";
        result.textContent = "";
    }
}

function convertToC() {
    formulaC = (form.value - 32) / 1.8;
    result.textContent = `${form.value}°F is ${formulaC.toFixed(1)} °C`;
    form.value = "";
}

function convertToF() { 
    formulaF = form.value * 1.8 + 32;
    result.textContent = `${form.value}°C is ${formulaF.toFixed(1)} °F`;
    form.value = "";
}

const conversion = () => {
    if(form.value !== '') {
        if(celsius.textContent === "°C") {
            convertToF();
        } else {
            convertToC();
        }
    } else {
        result.textContent = "Type some number!"
    }
}

btnConv.addEventListener('click', conversion)
btnReset.addEventListener('click', reset)
btnChange.addEventListener('click', swap)
