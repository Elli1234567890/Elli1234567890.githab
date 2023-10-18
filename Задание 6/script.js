let text = document.getElementById('stoimost')
let v = document.getElementById("ves");
let c = document.getElementById("cena");
let radio = document.getElementsByName("radio");
let rad = document.getElementById("rad");
let ch = document.getElementsByName("check");
let checks = document.getElementById("checks")
rad.style.display = "none";
checks.style.display = "none";

function st(event) {
  event.preventDefault();

  rad.style.display= (c.value === "40"? "block" : "none");
  checks.style.display = (c.value === "60"? "block" : "none");

  if (v.value <= 0 || !Number(v.value))
  {
    alert("Так сложно ввести положительное число?");
    console.log(v.value);
  }
    
  else{
    console.log("Работает");
    let radioCost = 0;
    for (let i = 0; i < radio.length;i++)
    {
      if (radio[i].checked)
        radioCost += Number(radio[i].value);
    }

    let checkCost = 0;
    for (let i = 0; i < ch.length;i++)
    {
      if (ch[i].checked)
        checkCost += Number(ch[i].value);
    }

    console.log(v.value, v.value, radioCost, checkCost);
    text.innerText = "Стоимость: " + String((Number(c.value)  + ((rad.style.display == "block")? radioCost : 0) + ((checks.style.display == "block")? checkCost : 0) )* v.value);
  }
  
};

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");
  
    c.addEventListener("click", st);
    v.addEventListener("change",st);
    rad.addEventListener("change",st);
    checks.addEventListener("change",st);
});
