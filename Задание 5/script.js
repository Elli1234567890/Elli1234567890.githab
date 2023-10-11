button.onclick = function() {
  let v = document.getElementsByName("ves");
  let c = document.getElementsByName("cena");
  let stoim = document.getElementById("stoimost");
}
   if (v[0].value < 0 || c[0].value < 0 || !Number(v[0].value) || !Number(c[0].value)) {
    alert("Так сложно ввессти положительные числа?");
    r.innerHtML = none;
  }
stoim = v[0].value * c[0].value / 100;
document.getElementById("stoimost").innerHTML = stoim;
}
