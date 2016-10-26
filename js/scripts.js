// ------ Business Logic -------
var regexp = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

var vowels = ["a", "e", "i", "o", "u"]

function emptyCheck (userInput) {

  if (!userInput || !userInput.match(regexp)) {
    alert("Enter text!");
    return false;
  }
};
//
// for (var i = 0; i < 1; i += 1;) {
//   i
// }

// --------User Int Logic -----------
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#text-input").val();
    var words = userInput.split(" ")
    console.log(words);

    emptyCheck(userInput);

    words.forEach(function(word) {
      vowels.forEach(function(vowel) {
        if (word.charAt(0) === vowel) {
          console.log(word + "ay");

        }
      });

    });

  });
});
