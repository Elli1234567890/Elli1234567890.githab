let text = document.getElementById('stoimost')

function st(event) {
  event.preventDefault();
  let v = document.getElementById("ves");
  let count = v.value;
  let c = document.getElementById("cena");
  let stoim = count * c.value / 100;
  if (count <= 0 || !Number(count))
    alert("Так сложно ввести положительное число?");
  else
    text.innerText = "Стоимость: " + String(c.value * count / 100) + "руб за 100г";
}

window.addEventListener('DOMContentLoaded', (event) => {
     console.log("DOM fully loaded and parsed");
     let button = document.getElementById("form");
     button.addEventListener("click", st);
});
