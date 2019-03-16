var escribir = document.getElementsByClassName('nombreTexto');
var leer = document.getElementById('nombre_nino');

leer.addEventListener("keyup", obtenerNombre);

function obtenerNombre(){
  var niño = document.getElementById('nombre_nino');
  nombre = niño.value;
  cambiarNombre(nombre);
}

function cambiarNombre(nombre){
  for (var i = 0; i < escribir.length; i++) {
    escribir[i].innerHTML= nombre
  }
}
