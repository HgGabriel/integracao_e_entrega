const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
    expect(math.add(2, 3)).toBe(5);
});

test('soma 2 - 3 igual a -1', () => {
    expect(math.subtract(2, 3)).toBe(-1);
});

test('soma 2 * 3 igual a 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
});

test('soma 6 / 2 igual a 3', () => {
    expect(math.divide(6, 2)).toBe(3);
});
