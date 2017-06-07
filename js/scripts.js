// business logic
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var vowels = ["a", "e", "i", "o", "u"];

var validWord = function(original) {
  if ((consonants.includes(original.charAt(0)) !== true) && (vowels.includes(original.charAt(0)) !== true)) {
    $("#invalid").show();
  };
};

var vowelLogic = function(original) {
  if ((original.length >= 1) && (vowels.includes(original.charAt(0)))) {
    var result = original + "way";
    console.log(result);
  }
};

var singleLetterConsonant = function(original) {
  if ((original.length === 1) && (consonants.includes(original.charAt(0)))) {
    var result = original + "ay";
    console.log(result);
  }
};

var consonantWork = function(original) {
  while (consonants.includes(original.charAt(0)) === true) {
    if ((original.length > 1) && (consonants.includes(original.charAt(0)))) {
      var replace = original.slice(0, 1);
      var minusFirst = original.replace(original.charAt(0), "");
      var original = minusFirst + replace;
    }
  }
  result = original + "ay";
  console.log(result);
}

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var original = $("input#original").val();
//    validWord(original);
//    vowelLogic(original);
//    singleLetterConsonant(original);
    consonantWork(original);
    $("#result").show();
  });
});
