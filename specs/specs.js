describe("numbersInWords", function(){
  it("takes a one digit number and returns the word associated with the number", function() {
    numbersInWords(1).should.equal("one");
  });
  it("takes a two digit number less than 20 and returns the word associated with the number", function() {
    numbersInWords(19).should.equal("nineteen");
  });
  it("takes a two digit number between 20 and 30 and returns the words associated with the number", function() {
    numbersInWords(25).should.equal("twenty five");
  });
  it("takes a number divisible by one hundred and returns the words associated with the number", function() {
    numbersInWords(200).should.equal("two hundred");
  })
});

describe("wordsToThousand", function(){
  it("takes a 3 digit number and returns the word associated with the number", function(){
    wordsToThousand(356).should.equal("three hundred fifty six");
  });
});
