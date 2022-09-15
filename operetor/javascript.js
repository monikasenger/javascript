function sum()
{
 var n1,n2,sum;
 n1=Number(document.getElementById("num1").value);
 n2=Number(document.getElementById("num2").value);

 sum=n1+n2;

 document.getElementById('display').textContent="n1= "+n1+", n2= "+n2+" "+", Addition=" +sum;
}
function sub(){

var n1,n2,sub;
 n1=Number(document.getElementById("num1").value);
 n2=Number(document.getElementById("num2").value);
sub=n1-n2;
 document.getElementById('display').textContent="n1= "+n1+", n2= "+n2+" "+", subtraction= "+sub;
}
function mul(){

var n1,n2,mul;
 n1=Number(document.getElementById("num1").value);
 n2=Number(document.getElementById("num2").value);
mul=n1*n2;
 document.getElementById('display').textContent="n1= "+n1+", n2= "+n2+" "+", multiplication= "+mul;
} 
function div(){

var n1,n2,div;
 n1=Number(document.getElementById("num1").value);
 n2=Number(document.getElementById("num2").value);
div=n1-n2;
 document.getElementById('display').textContent="n1="+n1+", n2= "+n2+" "+", division= "+div;
}   