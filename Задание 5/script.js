<h3>Расчет стоимости продуктов</h3>

function raschitat() {
   cvet  = document.getElementById('prodact').value;
   switch (prodact) {
      case "candy":
         cena = 20;
         break;
      case "marmelad":
         cena = 100;
         break;  
       case "cherry":
         cena = 50;
         break; 
       case "banana":
         cena = 70;
         break;
   }
   ves  = document.getElementById('ves').value;
   if(ves == ""){
      alert("Вы не указали вес продуктов");
   }
   else {
      stoimost = ves*cena/100;
      document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
   }
}
