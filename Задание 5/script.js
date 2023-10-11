<!-- document.getElementById('button').onclick = function(){
    st();
};
-->

let = st() => {
  let v = document.getElementsByName("ves");
  let c = document.getElementsByName("cena");
  let stoim = v * c[0].value / 100;
  if (v <= 0 || !Number(v))alert("Так сложно ввести положительное число > 0?");
  else return "Стоимость: " + String(c[0].value * v / 100) + "руб за 100г";
  
  <!-- console.log(st[0].value);
  
  document.getElementById('stoimost').innerHTML = stoim;
  
  if (v <= 0 || !Number(v)) {
    alert("Так сложно ввести положительное число > 0?");
  }
  return false;
} -->

window.addEventListener('DOMContentLoaded, (event) => {
    console.log("DOM fully loaded and parsed");
    let button = document.getElementById("form");
    button.addEventListener("click", st());
});

