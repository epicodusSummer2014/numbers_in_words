describe("numbersInWords", function(){
  it("takes a 4 digit number and returns the words associated with the number", function() {
    numbersInWords("5000").should.equal("five thousand")
  });
  it("takes a 6 digit number and returns the words associated with the number", function() {
    numbersInWords("458768").should.equal("four hundred fifty eight thousand seven hundred sixty eight")
  });
  it("takes a 7 digit number and returns the words associated with the number", function() {
    numbersInWords("4444444").should.equal("four million four hundred forty four thousand four hundred forty four")
  });
  it("takes a 9 digit number with a bunch of zeros in it and returns the associated number", function() {
    numbersInWords("234000034").should.equal("two hundred thirty four million thirty four");
  });
  it("takes a number divisible by a million and returns the associated number", function() {
    numbersInWords("230000000").should.equal("two hundred thirty million");
  });
});

describe("wordsToThousand", function(){
  it("takes a one digit number and returns the word associated with the number", function() {
    wordsToThousand("1").should.equal("one");
  });
  it("takes a two digit number less than 20 and returns the word associated with the number", function() {
    wordsToThousand("19").should.equal("nineteen");
  });
  it("takes a two digit number between 20 and 30 and returns the words associated with the number", function() {
    wordsToThousand("25").should.equal("twenty five");
  });
  it("takes a number divisible by one hundred and returns the words associated with the number", function() {
    wordsToThousand("200").should.equal("two hundred");
  });
  it("takes a 3 digit number and returns the word associated with the number", function(){
    wordsToThousand("356").should.equal("three hundred fifty six");
  });
});
