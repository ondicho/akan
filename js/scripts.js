var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
//day of the week
function checkResult(){
  let day=document.getElementsById('day').value
  let month=document.getElementsById('month').value
  let year=document.getElementsById('year').value
}
var CC=parseInt("year".slice(0,1));
var YY=parseInt("year".slice(2,3));
var MM=parseInt("month");
var DD=parseInt("day");

var dayOfTheWeek=function (CC,YY,MM,DD) {
  return (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
}
