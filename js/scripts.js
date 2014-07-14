  var singlesAndTeens = {"0": "zero",
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

var wordsToThousand = function (num) {
  if (numArr.length ===1 || (numArr.length ===2 && numArr[0]==="1")){
    return singlesAndTeens[num];
  }else if(numArr[1]==="0" && numArr[2]==="0"){
    return singlesAndTeens[numArr[0]] + " " + "hundred"
  }
  var finalWord = "";
  for(var i=0; i<numArr.length; i++){
    finalWord += placesArr[i][numArr[i]] + " ";
  }
};

var numbersInWords = function(num) {

  var placesArr = [tensAboveNineteen, singlesAndTeens];
  var bigNums = ["hundred", "thousand"];

  var numArr= num.toString().split("");


  return finalWord.trim();
};
