const calculator = require('./calculator');


describe('Addition', () => {
    test('Add 1 + 1 to give 2', () => {
        expect(calculator.add(1, 1)).toBe(2);
    })

    test('Add 2 + 2 to give 4', () => {
        expect(calculator.add(2, 2)).toBe(4);
    })

    test('Add 7 + 3 to give 10', () => {
        expect(calculator.add(7, 3)).toBe(10);
    })
})

describe('Subtraction', () => {
    test('Subtract 1 - 1 to give 0', () => {
        expect(calculator.subtract(1, 1)).toBeLessThan(1);
    })

    test('Subtract 8 - 4 to give 4', () => {
        expect(calculator.subtract(8, 4)).toBe(4);
    })

    test('Subtract 9 - 1 to give 2', () => {
        expect(calculator.subtract(9, 1)).toBe(8);
    })
})

describe('Multiplication', () => {
    test('Multiply 1 * 1 to give 1', () => {
        expect(calculator.times(1, 1)).toBe(1);
    })

    test('Multiply 2 * 8 to give 16', () => {
        expect(calculator.times(2, 8)).toBe(16);
    })

    test('Multiply 10 * 10 to give 10', () => {
        expect(calculator.times(10, 10)).toBe(100);
    })
})

describe('Division', () => {
    test('Divide 1 / 1 to give 1', () => {
        expect(calculator.divide(1, 1)).toBe(1);
    })

    test('Divide 0 / 1 to give 2', () => {
        expect(calculator.divide(0, 1)).toBe(0);
    })

    test('Divide 100 / 10 to be less than 0.2', () => {
        expect(calculator.divide(100, 10)).toBe(10);
    })
})