const gameOfLife = require('./gameOfLife');

let alive = true;
let dead = false;



test('adds 1 + 2 to equal 3', () => {

  var initialState = [[dead , dead , dead , dead , dead , dead , alive, dead],
                      [alive, alive, alive, dead , dead , dead , alive, dead],
                      [dead , dead , dead , dead , dead , dead , alive, dead], 
                      [dead , dead , dead , dead , dead , dead , dead , dead],
                      [dead , dead , dead , alive, alive, dead , dead , dead],
                      [dead , dead , dead , alive, alive, dead , dead , dead]];

  let expectedState =  [[dead , alive, dead , dead , dead , dead , dead , dead],
                        [dead , alive, dead , dead , dead , alive, alive, alive],
                        [dead , alive, dead , dead , dead , dead , dead , dead], 
                        [dead , dead , dead , dead , dead , dead , dead , dead],
                        [dead , dead , dead , alive, alive, dead , dead , dead],
                        [dead , dead , dead , alive, alive, dead , dead , dead]];

  expect(gameOfLife(initialState)).toBe(expectedState);
});