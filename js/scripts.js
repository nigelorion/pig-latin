// ------ Business Logic -------
var regexp = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

var vowels = ["a", "e", "i", "o", "u", "y"]

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
    var words = userInput.split(" ");
    var pigLatin = [];

    emptyCheck(userInput);

    words.forEach(function(word) {
      var beforeVowel = [];
      var afterVowel = [];
      for(var i = 0; i<word.length;i++) {
        vowels.forEach(function(vowel) {
          if (beforeVowel.length === 0) {
            if (word.charAt(i) === vowel && word.charAt(0) !== "y") {
              beforeVowel.push(word.slice(0,i)+"ay");
              afterVowel.push(word.slice(i));
              pigLatin.push(afterVowel + beforeVowel);
            }
          }
        });
      };
    });
    alert(pigLatin.join(" "));
  });
});
