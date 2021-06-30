const TestingExample = require('./index');
let squareNumber = require('./js/example-function');
let numberMethods = require('./js/example-multiple-functions');

jest.mock('./js/example-function');

const testingExamples = new TestingExample();

describe('Example function', () => {
    it('should replace the return of an imported function', () => {
        squareNumber.mockReturnValue(123);
        const result = testingExamples.testSquareNumber(4);

        expect(result).toEqual(123);
    });

    it('should replace the return of methods imported with a spy', () => {
        jest.spyOn(numberMethods, 'doubleNumber').mockReturnValueOnce(123);

        const result = testingExamples.testDoubleNumber(4);

        expect(result).toEqual(123);
    });

    it('should replace the return of methods imported without a spy', () => {
        numberMethods.doubleNumber.mockReturnValueOnce(123);

        const result = testingExamples.testDoubleNumber(4);

        expect(result).toEqual(123);
    });
});
