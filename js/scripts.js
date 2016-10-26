// ------ Business Logic -------
var regexp = /^[a-zA-Z]+$/;
var vowels = ["a", "e", "i", "o", "u"]

function emptyCheck (userInput) {

  if (!userInput || !userInput.match(regexp)) {
    alert("Enter text!");
    return false;
  }
};


// --------User Int Logic -----------
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#text-input").val();
    console.log(userInput);
    emptyCheck(userInput);

    vowels.forEach(function(vowel) {
      if (userInput === vowel) {
        alert("This is a vowel!")
      }

    });

  });
});
