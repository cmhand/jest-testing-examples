export class ExampleClass {
    constructor(private number) {}

    squareNumber() {
        return this.number * this.number;
    }

    public static halfNumber(number) {
        return number / 2;
    }
}