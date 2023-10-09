<h3>Расчет стоимости продуктов</h3>
<select id="prodact">
<option value="candy">Конфеты</option>
<option value="marmelad">Мармелад</option>
<option value="cherry">Черешня</option>
<option value="banana">Бананы</option>
</select>
<input type="text" id="ves" value="" placeholder="укажите вес продуктов">
<button onclick="raschitat();">Рассчитать стоимость</button>
<div id="stoimost"></div>
<script type="text/jаvascript">
function raschitat() {
cvet  = document.getElementById('prodact').value;
switch (prodact) {
   case "candy":
      cena = 20;
      break
   case "marmelad":
      cena = 100;
      break   
    case "cherry":
      cena = 50;
      break 
    case "banana":
      cena = 70;
      break 
}
ves  = document.getElementById('ves').value;
if(ves == ""){
alert("Вы не указали вес продуктов");
} else {
stoimost = prodact*cena;
document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
}
}
</script>
