// var userInput = $("#text-input").val();
//
// function errorCheck(userInput) {
//   if (!userInput) {
//     alert("Please enter text!");
//     return false;
//   } else {
//     return true;
//   }
// };
//
// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//
//
//     errorCheck(userInput);
//
//
//   });
// });
function errorCheck (userInput) {

  if (!userInput) {
    alert("Enter text!");
    return false;
  }
};


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("#text-input").val();
    console.log(userInput);
    errorCheck(userInput);

  });
});
