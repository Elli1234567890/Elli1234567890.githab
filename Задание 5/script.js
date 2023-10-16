let text = document.getElementById('stoimost')

function st(event) {
  event.preventDefault();
  let v = document.getElementById("ves");
  let c = document.getElementsByName("cena");
  let stoim = v * c[0].value / 100;
  if (v <= 0 || !Number(v))
    alert("Так сложно ввести положительное число?");
  else
    text.innerText = "Стоимость: " + String(c[0].value * v / 100) + "руб за 100г";
}

window.addEventListener('DOMContentLoaded, (event) => {
     console.log("DOM fully loaded and parsed");
     let button = document.getElementById("form");
     button.addEventListener("click", st(self));
});



