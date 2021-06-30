const squareNumber = require('./js/example-function');

function TestingExamples() {
    this.testSquareNumber = function (number) {
        return squareNumber(number);
    }
}

module.exports = TestingExamples;