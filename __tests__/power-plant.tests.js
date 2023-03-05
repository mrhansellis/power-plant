import { hiMyNameIsHans } from './../src/js/power-plant.js'

describe('hiMyNameIsHans', () => {

  test('should return the expected result', () => {
    let result = hiMyNameIsHans();
    expect(result).toEqual("Hi my name is Hans");
  });

});