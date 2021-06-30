import { TypescriptExamples } from './main';
import { ExampleClass } from './ts/ExampleClass';

jest.mock('./ts/ExampleClass');

const typescriptExamples = new TypescriptExamples();

describe('Typescript examples', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('class constructed in method', () => {
        it('should override a class constructed within a method by spying on the prototype', () => {
            // Since this is a class, you can spy on the prototype and return a new value
            jest.spyOn(ExampleClass.prototype, 'squareNumber').mockReturnValue(123);
            
            const result = typescriptExamples.methodThatConstructsClass();

            expect(result).toEqual(123);
        });

        it('should override a class constructed within a method by replacing the implementation', () => {
            ExampleClass.mockImplementation(() => {
                return {
                    squareNumber() { return 123; }
                }
            });
            
            const result = typescriptExamples.methodThatConstructsClass();

            expect(result).toEqual(123);
        });
    });

    describe('class with static methods', () => {
        it('should override a static method call on a class', () => {
            ExampleClass.halfNumber.mockReturnValue(123);

            const result = typescriptExamples.methodThatCallsStaticMethod();

            expect(result).toEqual(123);
        });
    });

    describe('class with async method', () => {
        it('should wait correctly for the actual response', async () => {
            const result = await typescriptExamples.methodThatSlowlyGetsResponse();
    
            expect(result).toEqual(5);
        });

        it('should be able to mock an async return as well', async () => {
            jest.spyOn(typescriptExamples, 'methodThatSlowlyGetsResponse').mockResolvedValueOnce(123);

            const result = await typescriptExamples.methodThatSlowlyGetsResponse();

            expect(result).toEqual(123);
        });
    });
});