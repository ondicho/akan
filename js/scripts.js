
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

if (x=1) {
  document.getElementById("third").innerHTML="I am male";
} else if (y=1) {
  document.getElementById("third").innerHTML="I am female";
}
}
