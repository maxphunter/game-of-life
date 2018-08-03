const gameOfLife = require('./gameOfLife');

let alive = true;
let dead = false;



test('Predict Next Generation', () => {

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

  expect(gameOfLife(initialState)).toEqual(expectedState);
});