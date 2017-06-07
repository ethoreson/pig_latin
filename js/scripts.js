// business logic

var pigLatin = function(original) {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  var vowels = ["a", "e", "i", "o", "u", "y"];
  console.log(original.charAt(0));
  console.log(consonants.includes(original.charAt(0)));
  if ((consonants.includes(original.charAt(0)) !== true) && (vowels.includes(original.charAt(0)) !== true)) {
    $("#invalid").show();
  };
};


// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var original = $("input#original").val();
    pigLatin(original);
    $("#result").show();
  });
});
