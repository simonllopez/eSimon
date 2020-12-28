
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
    
    Data = JSON.parse(this.responseText)
    // if (Data.toString() == ""){
      for (var i = 0 ; i<18 ; i++)
      {
        str1 = "t00x" + i.toString();
        str2 = "t01x" + i.toString();
        document.getElementById(str1).innerHTML = ""
        document.getElementById(str2).innerHTML = ""
      }
      for (index in Data)
      {
        str1 = "t00x" + index.toString();
        str2 = "t01x" + index.toString();
        document.getElementById(str1).innerHTML = Data[index].nombre
        document.getElementById(str2).innerHTML = Data[index].apellido
        
      }
    }

 
  }






