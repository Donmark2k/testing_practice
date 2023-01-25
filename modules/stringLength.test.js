const stringLength = require('./stringLength');

test ('add expected "hello world!"', () => {
   // expect(stringLength ("Hello, World!")).toBe(13);
   expect(stringLength('king')).toBe(4)
});

const stringLength1 = require('./stringLength');
const stringLength2 = require('./stringLength');


test('stringLength function should return correct length', () => {
    expect(stringLength1("hello")).toBe(5);
  });
  
  test('stringLength function should throw error if string is less than 1 character', () => {
    expect(() => stringLength1("")).toThrowError("String must be at least 1 character long");
  });
  
  test('The string length for encyclopedia is greater than 10', () => {
    expect(stringLength2('encyclopedia')).toBe('Conditions are not met');
  });

  test('stringLength function should throw error if string is more than 10 characters', () => {
    expect(() => stringLength1("this string is more than 10 characters")).toThrowError("String must not be longer than 10 characters");
  });
  