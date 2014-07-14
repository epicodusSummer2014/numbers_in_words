  var singlesAndTeens = {"0": "",
                     "1": "one",
                     "2": "two",
                     "3": "three",
                     "4": "four",
                     "5": "five",
                     "6": "six",
                     "7": "seven",
                     "8": "eight",
                     "9": "nine",
                     "10": "ten",
                     "11": "eleven",
                     "12": "twelve",
                     "13": "thirteen",
                     "14": "fourteen",
                     "15": "fifteen",
                     "16": "sixteen",
                     "17": "seventeen",
                     "18": "eighteen",
                     "19": "nineteen",
                      };
  var tensAboveNineteen = {
                      "2": "twenty",
                      "3": "thirty",
                      "4": "forty",
                      "5": "fifty",
                      "6": "sixty",
                      "7": "seventy",
                      "8": "eighty",
                      "9": "ninety"
                      };
var tens;
var placesArr = [tensAboveNineteen, singlesAndTeens];
var tensPlace = function(num) {
  var numArr= num.toString().split("");
  if (num > 19 && num < 100 && numArr[1]!==0) {
    return tensAboveNineteen[numArr[0]] + " " + singlesAndTeens[numArr[1]]
  } else if(num < 1){
    return "";
  } else if(num < 100){
    return tensAboveNineteen[numArr[0]];
  }
};

var wordsToThousand = function (num) {
  var numArr= num.toString().split("");
num = parseInt(num, 10);
  if(num==="000" || num === 0){
    return "";
  }
    else if (num < 20){
    return singlesAndTeens[num];
  } else if (num > 20 && num < 100) {
    return tensPlace(num.toString());
  } else if (num > 99 && num < 1000) {
    return (singlesAndTeens[numArr[0]] + " hundred " + tensPlace(num-(100*num.toString().charAt(0)))).trim();
  }
};

var threeDigits = function(num, pos1, pos2) {
  if(num===0 || num ==="000"){
    return ""
  }else{
    return wordsToThousand(num.toString().slice(pos1, pos2))
  }
}

var ifThousand = function(num) {
  if (num > 0 ) {
    return " thousand ";
  } else {
    return "";
  }
};

var numbersInWords = function(num) {
  num = parseInt(num, 10);
  if(num > 1 && num < 1000) {
    return wordsToThousand(num);
  }
  if(num > 999 && num < 999999){
    return (threeDigits(num, -6, -3) + " thousand " + threeDigits(num, -3)).trim();
  }
  if(num > 999999 && num < 999999999 ){
    if(num % 1000000 === 0){
      return threeDigits(num, -9,-6) + " million"
    }
    return (threeDigits(num, -9, -6) + " million " + threeDigits(num,-6,-3) + ifThousand(num.toString().slice(-6,-3)) + threeDigits(num, -3)).trim();
  };
};

$(document).ready(function(){
  $("form#wordInput").submit(function(event){
    var input= $("#input").val()
    var result = numbersInWords(input);
    $("span").text(result)
    $("#input").val("");
    event.preventDefault();
  })
})

