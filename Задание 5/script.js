function st() {
  let v = document.getElementsByName("ves");
  let c = document.getElementsByName("cena");
  let stoim = document.getElementsById("stoimost");
  stoim = v * c[0].value / 100;
  console.log(st[0].value);
  
  document.getElementById('stoimost').innerHTML=total;
  
  if (v < 0 || c[0].value < 0 || !Number(v)) {
    alert("Так сложно ввести положительные числа?");
  }
  return false;
}

window.addEventListener('DOMContentLoaded, (event){
    console.log("DOM fully loaded and parsed");
    let button = document.getElementById("button");
    button.addEventListener("Так сложно ввести положительные числа?", st());
});
