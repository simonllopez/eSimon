
function Registrar ()
{

console.log("REG");

var URL = 'http://192.168.0.101:8081';

function reqListener () {
    console.log(this.responseText);
    JsonData = JSON.parse(this.responseText);

  }
  
  var nombre_enviar = document.getElementById("fname1").value;
  var apellido_enviar = document.getElementById("fname2").value;
  var Req = new XMLHttpRequest();
  Req.addEventListener("load", reqListener);
  Req.open("GET", URL + '?R[{"nombre":"'+nombre_enviar+'", "apellido":"'+apellido_enviar+'"}]');
  Req.send();

}


function Comprobar ()
{

  console.log("comprobar");

  var URL = 'http://192.168.0.101:8081';

  function reqListener () {
      console.log(this.responseText);
      if(this.responseText == "OK")
      {
        document.getElementById("txt00").innerHTML = "OK";
      }else if(this.responseText == "NO"){
        document.getElementById("txt00").innerHTML = "NO";
      }
      else
      {
      JsonData = JSON.parse(this.responseText);
      }
    }
    
    var nombre_enviar = document.getElementById("fname1").value;
    var apellido_enviar = document.getElementById("fname2").value;
    var Req = new XMLHttpRequest();
    Req.addEventListener("load", reqListener);
    Req.open("GET", URL + '?C [{"nombre":"'+nombre_enviar+'", "apellido":"'+apellido_enviar+'"}]');
    Req.send();
  
}



