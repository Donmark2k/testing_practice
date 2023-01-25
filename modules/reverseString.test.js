const reverseString = require('./reverseString');

describe("reverseString", () => {
    test('Reverse a string', () => { 
        expect(reverseString('king')).toBe('gnik');
    });
})