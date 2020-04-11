function dodawanie()
{
 var dodaj1=document.getElementById("pole1").value;
 var dodaj2=document.getElementById("pole2").value;
 var dodawanie=0;
dodawanie=Number(dodaj1)+Number(dodaj2);
document.getElementById("koniec").innerHTML="Wynik:"+dodawanie;
}
 
 function odejmowanie()
{
var odejmij1=document.getElementById("pole1").value;
var odejmij2=document.getElementById("pole2").value;
var odejmowanie=0;
odejmowanie=odejmij1-odejmij2;
document.getElementById("koniec").innerHTML="Wynik:"+odejmowanie;
}
  
 function mnozenie()
{
var mnoz1=document.getElementById("pole1").value;
var mnoz2=document.getElementById("pole2").value;
var mnozeniex=0;
var mnozenie=mnoz1*mnoz2;
 
document.getElementById("koniec").innerHTML=mnozenie;
}
  
 function dzielenie()
{
var dziel1=document.getElementById("pole1").value;
var dziel2=document.getElementById("pole2").value;
var dzielenie=0;
  
if (dziel2==0)
{
document.getElementById("koniec").innerHTML="Nie dzieli się przez 0!";
}
else
{
dzielenie=dziel1/dziel2;
document.getElementById("koniec").innerHTML=dzielenie;
}
}