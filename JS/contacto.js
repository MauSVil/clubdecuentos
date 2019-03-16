var nombre;
var correo;
var tel;
var message;

var enviar = document.getElementById('confirmar')
enviar.addEventListener("click", getInfo)



function getInfo(){
  var nombreID = document.getElementById('name')
  nombre = nombreID.value;

  var correoID = document.getElementById('email')
  correo = correoID.value;

  var telID = document.getElementById('tel')
  tel = telID.value;

  var messageID = document.getElementById('message')
  message = messageID.value;

  console.log("Hola "+ nombre + " tu correo es: " +correo+ " y tu telefono es: "+tel);
}
