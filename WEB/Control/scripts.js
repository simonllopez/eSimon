
function Go(p1)
{

// document.getElementById("t00x00").innerHTML="Simon"
// document.getElementById("t01x00").innerHTML="Lopez"

var URL = 'http://192.168.0.101:8081?';
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", URL+p1);
  oReq.send();

  function reqListener () {
    
    }
 
  }






