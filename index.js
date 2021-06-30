const squareNumber = require('./js/example-function');
const methods = require('./js/example-multiple-functions');

function TestingExamples() {
    this.testSquareNumber = function (number) {
        return squareNumber(number);
    }

    this.testDoubleNumber = function (number) {
        return methods.doubleNumber(number);
    }

    this.testCubeNumber = function (number) {
        return methods.cubeNumber(number);
    }
}

module.exports = TestingExamples;