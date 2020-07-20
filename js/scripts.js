//this function accepts the date and returns it as output in the results tab
function getValue() {
  var date = document.getElementById("mydate").value;
  document.getElementById("resultsBody").innerHTML=date;
$("#results").show();
$("#resultsB").show();
};
