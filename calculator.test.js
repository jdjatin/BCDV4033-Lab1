const Calculator = require('./calculator');

describe('Calculator', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test('subtracts 2 from 5 to equal 3', () => {
    expect(Calculator.subtract(5, 2)).toBe(3);
  });

  test('multiplies 2 by 3 to equal 6', () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });

  test('divides 6 by 2 to equal 3', () => {
    expect(Calculator.divide(6, 2)).toBe(3);
  });

  test('divides by 0 to return an error message', () => {
    expect(Calculator.divide(6, 0)).toBe('Cannot divide by zero');
  });
});
