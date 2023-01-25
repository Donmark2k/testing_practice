const capitalize = require('./capitalize');

describe("CapitalizeString", () => {
        
    test('string value is capitalized', () => { 
        expect(capitalize("none")).toBe('None');
    });

    test('string value is capitalized', () => { 
        expect(capitalize("Onyeka")).toBe('Onyeka');
    });
    
});