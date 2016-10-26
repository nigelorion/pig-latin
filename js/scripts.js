var userInput = $("input#text-input").val();

function errorCheck(userInput) {
  if (!userInput) {
    alert("Please enter text!");
  }
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


    errorCheck(userInput);


  });
});
