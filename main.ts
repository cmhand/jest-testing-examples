import { ExampleClass } from "./ts/ExampleClass";

export class TypescriptExamples {
    public methodThatConstructsClass() {
        const service = new ExampleClass(4);
        return service.squareNumber();
    }

    public methodThatCallsStaticMethod() {
        return ExampleClass.halfNumber(10);
    }

    public async methodThatSlowlyGetsResponse() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(5);
            }, 1000);
        });
    }
}