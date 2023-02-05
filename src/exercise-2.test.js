const bigList = require('../data/big-list.json');
const exercise2 = require('./exercise-2');

describe('exercise-2', () => {
  it('should retrieve right values from the big list', () => {
    const { mostCommonLanguage, mostLangs, mostLangsDE, numberOfContries } =
      exercise2(bigList);

    expect(mostCommonLanguage.language).toEqual('en');
    expect(mostLangs.country).toEqual('ZW');
    expect(mostLangsDE.country).toEqual('BE');
    expect(numberOfContries).toEqual(bigList.length);
  });
});
