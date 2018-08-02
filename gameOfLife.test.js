const gameOfLife = require('./gameOfLife');

test('adds 1 + 2 to equal 3', () => {
  expect(gameOfLife(1, 2)).toBe(3);
});