
var regexp = /^[a-zA-Z]+$/;
function emptyCheck (userInput) {

  if (!userInput || !userInput.match(regexp)) {
    alert("Enter text!");
    return false;
  }
};

// function lettersCheck (userInput) {
//   if (!userInput.match(regexp)) {
//     alert("No number or symbols please!")
//     return false;
//   }
// };


// function vowelChecker (userInput) {
//
//   if ()
//
// };

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#text-input").val();
    console.log(userInput);


    emptyCheck(userInput);

  });
});
