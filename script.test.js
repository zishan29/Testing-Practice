import {
  capitalize,
  reverse,
  Calculator,
  caesarCipher,
  analyzeArray,
} from './script';

test('capitalize first letter', () => {
  expect(capitalize('string')).toBe('String');
  expect(capitalize('12@#Abcd@#34')).toBe('12@#Abcd@#34');
});

test('reverse a string', () => {
  expect(reverse('string')).toBe('gnirts');
});

test('calculator', () => {
  const cal = new Calculator();
  expect(cal.add(4, 4)).toBe(8);
  expect(cal.sub(4, 5)).toBe(-1);
  expect(cal.mul(4, 2)).toBe(8);
  expect(cal.div(4, 2)).toBe(2);
  expect(cal.div(4, -2)).toBe(-2);
});

test('Caesar cipher', () => {
  expect(caesarCipher('ABC', 1)).toBe('BCD');
  expect(caesarCipher('aAabBbzZz', 1)).toBe('bBbcCcaAa');
  expect(caesarCipher('a1ab#bc c', 2)).toBe('c1cd#de e');
});

test('Analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
