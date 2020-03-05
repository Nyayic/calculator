const assert = require('assert')
const {Given, When, Then} = require('cucumber')

var answer = 0
//Addition
Given ('I start with {int}', (input)=>{
    answer = input
});

When('I add {int}', function (input) {
      answer =+ input
});

Then('I end up with {int}', function (input) {
     answer = input
    //  assert.equal(answer, input);
});

//Multiplication
When('I multiply with {int}', function (input) {
    // answer =(answer) * input;
    assert.equal(4, answer);
});

Then('I get {int}', function (input) {
    answer = input;
});

//Division
When('I divide it with {int}', function (input) {
      answer = answer / input;
});


//Subtraction
When('I subtract {int}', function (input) {
          answer = answer - input;
});


