// business logic
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
var vowels = ["a", "e", "i", "o", "u"];

var validWord = function(original) {
  if ((consonants.includes(original.charAt(0)) !== true) && (vowels.includes(original.charAt(0)) !== true)) {
    $("#invalid").show();
  };
};

var singleLetterVowel = function(original) {
  if ((original.length === 1) && (vowels.includes(original.charAt(0)))) {
    var result = original + "way";
  }
};

var singleLetterConsonant = function(original) {
  if ((original.length === 1) && (consonants.includes(original.charAt(0)))) {
    var result = original + "ay";
  }
};

var consonantWork = function(original) {
  if ((original.length > 1) && (consonants.includes(original.charAt(0)))) {
      var replace = original.slice(0, 1);
      minusFirst = original.replace(original.charAt(0), "");
      console.log(replace);
      console.log(minusFirst);
      console.log(minusFirst + replace + "ay");
  }
};

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var original = $("input#original").val();
    validWord(original);
    singleLetterVowel(original);
    singleLetterConsonant(original);
    consonantWork(original);
    $("#result").show();
  });
});
