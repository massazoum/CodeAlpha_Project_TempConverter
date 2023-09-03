const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.getElementById("temperatureDropdown");
const temperatureDisplay = document.getElementById("temperatureDisplay");
const dropdowncontentsub = document.querySelector(".dropdown-content");
const inputNumber = document.getElementById("inputNumber");
const result = document.getElementById("result");
const Convert = document.getElementById("Convert");

const dropdown_Selected = document.querySelector(".dropdown_Selected");
const dropdownContent_Selected = document.getElementById("temperatureDropdown_Selected");
const temperatureDisplay_Selected = document.getElementById("temperatureDisplay_Selected");
const dropdowncontentsub_Selected = document.querySelector(".dropdown-content_Selected");

const Home =document.getElementById("Home");

const Converter =document.getElementById("Converter");

const About =document.getElementById("About");

const centereddiv =document.getElementById("centered-div");
const mainconverter =document.getElementById("mainconverter")

Home.addEventListener("click",function(){
 centereddiv.style.display = "none"
 mainconverter.style.display ="flex"
})

Converter.addEventListener("click",function(){
  
 })

 About.addEventListener("click",function(){
  mainconverter.style.display ="none"
  centereddiv.style.display = "block"
 })




let V1 = temperatureDisplay.textContent;
let V2 = temperatureDisplay_Selected.textContent;

dropdown.addEventListener("click", () => {
  dropdowncontentsub.style.display = 'block';
});

dropdown_Selected.addEventListener("click", () => {
  dropdowncontentsub_Selected.style.display = 'block';
});

const displayTemp = (unit) => {
  temperatureDisplay.textContent = unit;
  V1 = unit;
};

document.getElementById("celsius").addEventListener("click", () => {
  displayTemp('celsius');
});
document.getElementById("fahrenheit").addEventListener("click", () => {
  displayTemp('fahrenheit');
});
document.getElementById("kelvin").addEventListener("click", () => {
  displayTemp('kelvin');
});

document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("Convert");

  convertButton.addEventListener("click", () => {
    result.textContent = reponse(V1, V2, parseFloat(inputNumber.value));
  });
});

const displayTemp_Selected = (unit2) => {
  temperatureDisplay_Selected.textContent = unit2;
  V2 = unit2;
};

document.getElementById("celsius_Selected").addEventListener("click", () => {
  displayTemp_Selected('celsius');
});
document.getElementById("fahrenheit_Selected").addEventListener("click", () => {
  displayTemp_Selected('fahrenheit');
});
document.getElementById("kelvin_Selected").addEventListener("click", () => {
  displayTemp_Selected('kelvin');
});

function reponse(V1, V2, inputNumber) {
  if (V1 === "celsius") {
    if (V2 === "fahrenheit") {
      const F = (inputNumber * 9 / 5) + 32;
      return F;
    }
    if (V2 === "kelvin") {
      const K = inputNumber + 273.15;
      return K;
    }
  }



  if (V1 === "fahrenheit") {
    if (V2 === "celsius") {
      const C = (inputNumber - 32) * 5 / 9;
      return C;
    }
    if (V2 === "kelvin") {
      const K = ((inputNumber - 32)*5/9) + 273.15
      return K;
    }
  }


  if (V1 === "kelvin") {
    if (V2 === "celsius") {
      const c = inputNumber - 273.15;
      return c;
    }
    if (V2 === "fahrenheit") {
      const f =((inputNumber - 273.15)* 9/5) + 32
      return f
    }
  }


  return inputNumber; 


}
