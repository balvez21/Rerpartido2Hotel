//Funcion  que toma el valor introducido en el input que esta en el apartado de "contacto" y lugo lo guarda//
//En localStorage para mas luego retornarlo en una ubicacion designada.//
function guardarLocal(){
  var inpuT = document.getElementById("local").value;
  localStorage.setItem("texto", inpuT);
  document.getElementById("nombreP").innerHTML = localStorage.getItem("texto");
}    
document.addEventListener("click", guardarLocal);
document.getElementById("nombreP").innerHTML = localStorage.getItem("texto");
