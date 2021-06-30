const TestingExample = require('./index');
let squareNumber = require('./js/example-function');

jest.mock('./js/example-function');

const testingExamples = new TestingExample();

describe('Example function', () => {
    it('should square a number, or not', () => {
        squareNumber.mockReturnValue(123);
        const result = testingExamples.testSquareNumber(4);

        expect(result).toEqual(123);
    });
});