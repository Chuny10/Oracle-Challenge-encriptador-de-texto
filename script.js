var entrada = document.querySelector("#input-texto");
var salida = document.querySelector("#msg");
var btnencriptar1 = document.querySelector("#btn-encriptar");
var btndesencriptar2 = document.querySelector("#btn-desencriptar");
var copiarTexto = document.querySelector("#btn-copy");

	function copiar() {
   event.preventDefault();
 var mensaje = entrada.value;
 
 if (entrada.value == '' || salida == null) {
  var texto = document.getElementById('msg');
  texto.select();
  document.execCommand('copy');
  
} else {
  var texto = document.getElementById('input-texto');
  texto.select();
  document.execCommand('copy');
}
 
 }



	function encriptar() {
  	event.preventDefault();
	var salida = entrada.value;

  		if (salida == '' || salida == null) {
         alert('No se registró texto de entrada')

} 		else {

  		salida = salida.toLowerCase();  

  var textoDeSalida = entrada.value;
  var textoDeSalida1 = textoDeSalida.replaceAll('e','enter');
  var textoDeSalida2 = textoDeSalida1.replaceAll('i','imes');
  var textoDeSalida3 = textoDeSalida2.replaceAll('a','ai');
  var textoDeSalida4 = textoDeSalida3.replaceAll('u','ufat');
  var textoDeSalidaFinal = textoDeSalida4.replaceAll('o','ober');
 
	msg.value = textoDeSalidaFinal;
	entrada.value = ""
	}
}

	function desencriptar() {
   event.preventDefault();
  
   var textoDeSalida = msg.value;
   var textoDeSalida1 = textoDeSalida.replaceAll("enter", "e");
   var textoDeSalida2 = textoDeSalida1.replaceAll("imes", "i");
   var textoDeSalida3 = textoDeSalida2.replaceAll("ai", "a");
   var textoDeSalida4 = textoDeSalida3.replaceAll("ufat", "u");
   var textoDeSalidaFinal = textoDeSalida4.replaceAll("ober", "o");
  entrada.value = textoDeSalidaFinal;

 msg.value = "";
 
 }
 


 function sololetras(e){
   key=e.keycode || e.which;
   teclado=String.fromCharCode(key).toLowerCase();
   letras=" abcdefghijklmnñopqrstuvwxyz";
   especiales="8-37-38-46-164";
   teclado_especial=false;

   for(var i in especiales) {
      if(key==especiales[i]){
            teclado_especial=true; break;
      }
   }

   if(letras.indexOf(teclado) ==-1 && !teclado_especial){  
      return false;
   }

}

btnencriptar1.onclick = encriptar;
btndesencriptar2.onclick = desencriptar;
copiarTexto.onclick = copiar;