function st() {
  let v = document.getElementsByName("ves");
  let c = document.getElementsByName("cena");
  let stoim = v * c[0].value / 100;
  <!-- console.log(st[0].value); -->
  
  document.getElementById('stoimost').innerHTML = stoim;
  
  if (v <= 0 || !Number(v)) {
    alert("Так сложно ввести положительное число > 0?");
  }
  return false;
}

<!-- window.addEventListener('DOMContentLoaded, (event){
    console.log("DOM fully loaded and parsed");
    let button = document.getElementById("button");
    button.addEventListener("Так сложно ввести положительные числа?", st());
}); -->
