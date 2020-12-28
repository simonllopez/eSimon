
function Go(p1)
{

// document.getElementById("t00x00").innerHTML="Simon"
// document.getElementById("t01x00").innerHTML="Lopez"

var URL = 'http://192.168.0.101:8081?';
  

  var nombre = document.getElementById("fname1").value;
  var apellido = document.getElementById("fname2").value;

  console.log(nombre,apellido)

  var str = '[{"nombre":"' + nombre + '","apellido":"'+apellido+'"}]';
  console.log(str)
  console.log(JSON.parse(str))

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", URL+p1+str);
  oReq.send();

  function reqListener () {
    
    // Data = JSON.parse(this.responseText)
    // console.log(Data)
    window.alert("Registrado Correctamente");


    }
 
}






