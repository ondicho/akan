
function getValue() {
  event.preventDefault()
  var date = document.getElementById("mydate").value;
  var x=document.getElementById("male").checked;
  var y=document.getElementById("female").checked;

  document.getElementById("first").innerHTML=date;
  $("#results").show();
  $("#resultsBody").show()


var year=parseInt(date);
document.getElementById("second").innerHTML=year;

if (x===1 && x!==0) {
  document.getElementById("third").innerHTML="I am male";
} else {
  document.getElementById("third").innerHTML="I am female";
}

var birthDate=new Date(date);
var year=birthDate.getFullYear();
var yearString=year.toString()
var CC=yearString.slice(0,2);
var YY=yearString.slice(2,4);
var MM=birthDate.getMonth()+1;
var DD=birthDate.getDate();

document.getElementById("fourth").innerHTML=YY;
}
