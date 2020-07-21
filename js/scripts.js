
function getValue() {
  event.preventDefault()
  var date = document.getElementById("mydate").value;
  var x=document.getElementById("male").checked;
  var y=document.getElementById("female").checked;

  document.getElementById("first").innerHTML=date;
  $("#results").show();
  $("#resultsBody").show()


if (x===true) {
  document.getElementById("second").innerHTML="Gender: male";
} else{
  document.getElementById("second").innerHTML="Gender: female";
}

var birthDate=new Date(date);
var year=birthDate.getFullYear();
var yearString=year.toString()
var CC=yearString.slice(0,2);
var YY=yearString.slice(2,4);
var MM=birthDate.getMonth()+1;
var DD=birthDate.getDate();
var d=(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
var dayOfTheWeek=d.toFixed(0);
document.getElementById("day").innerHTML=dayOfTheWeek;

var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

if (dayOfTheWeek==1 && x==true) {
  document.getElementById("fourth").innerHTML=male[0];
}
else if(dayOfTheWeek==1 && x!=true)  {
  document.getElementById("fourth").innerHTML=female[0];
}
else if (dayOfTheWeek==2 && x==true) {
  document.getElementById("fourth").innerHTML=male[1];
}
else if(dayOfTheWeek==2 && x!=true)  {
  document.getElementById("fourth").innerHTML=female[1];
}
else if (dayOfTheWeek==3 && x==true) {
  document.getElementById("fourth").innerHTML=male[2];
}
else if(dayOfTheWeek==3 && x!=true)  {
  document.getElementById("fourth").innerHTML=female[2];
}
else if (dayOfTheWeek==4 && x==true) {
  document.getElementById("fourth").innerHTML=male[3];
}
else if(dayOfTheWeek==4 && x!=true)  {
  document.getElementById("fourth").innerHTML=female[3];
}
else if (dayOfTheWeek==5 && x==true) {
  document.getElementById("fourth").innerHTML=male[4];
}
else if(dayOfTheWeek==5 && x!=true)  {
  document.getElementById("fourth").innerHTML=female[4];
}
else if (dayOfTheWeek==6 && x==true) {
  document.getElementById("fourth").innerHTML=male[5];
}
else if(dayOfTheWeek==6 && x!=true)  {
  document.getElementById("fourth").innerHTML=female[5];
}
else if (dayOfTheWeek==7 && x==true) {
  document.getElementById("fourth").innerHTML=male[6];
}
else {
  document.getElementById("fourth").innerHTML=female[6];
}
}
