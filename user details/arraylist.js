var arremail=new Array();
var arrNames=new Array();
var arrphone=new Array();
var arraddress=new Array();
var arrhobby=new Array();
var arrmarks=new Array();
 
function savedata(){
    var name = document.getElementById('name').value;
    var hobby = document.getElementById('hobby').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var marks = document.getElementById('marks').value;
    arremail[arremail.length]=email;    
    arrNames[arrNames.length]=name;
    arrphone[arrphone.length]=phone;
    arraddress[arraddress.length]=address;
    arrhobby[arrhobby.length]=hobby;
    arrmarks[arrmarks.length]=marks;
    document.getElementById('name').value=' ';
document.getElementById('hobby').value=' ';
 document.getElementById('phone').value=' ';
  document.getElementById('email').value=' ';
   document.getElementById('address').value=' ';
   document.getElementById('marks').value=' ';
  }
  
 
function displayData() 
{
  var content="<h1>Data Entered by User :</h1><br>";
  content+="<b>NAMES: </b>   "+ [arrNames]+"</br>";
  content+="<b>HOBBY:  </b>  "+[arrhobby]+"</br>";
  content+="<b>EMAIL: </b>   "+[arremail]+"</br>";
  content+="<b>PHONE:  </b>  "+[arrphone]+"</br>";
  content+="<b>ADDRESS: </b>   "+[arraddress]+"</br>";
  content+="<b>MARKS:   </b> "+[arrmarks]+"</br>";
  document.getElementById('display').innerHTML = content;
}