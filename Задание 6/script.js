let text = document.getElementById('stoimost')

function st(event) {
  event.preventDefault();
  let v = document.getElementById("ves");
  let count = v.value;
  let c = document.getElementById("cena");
  let stoim = count * c.value / 100;
  let radio = document.getElementId("rad");
  radio.style.display = "none";
  let ch = document.getElementId("check");
  ch.style.display = "none";
  if (count <= 0 || !Number(count))
    alert("Так сложно ввести положительное число?");
  else{
    if(c.value == 40){
      radioDiv.style.display = "block";
      text.innerText = "Стоимость: " + String(c.value * count * radio.value / 100) + "руб за 100г";
    }
    if(c.value == 60){
      ch.style.display = "block";
      text.innerText = "Стоимость: " + String(c.value * count * ch.value / 100) + "руб за 100г";
    }
    if(c.value == 50 || c.value == 35){text.innerText = "Стоимость: " + String(c.value * count / 100) + "руб за 100г";
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
     console.log("DOM fully loaded and parsed");
     let button = document.getElementById("form");
     button.addEventListener("click", st);
});
