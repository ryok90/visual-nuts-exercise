const exercise1 = require('./exercise-1');
const exercise2 = require('./exercise-2');

const arg = process.argv[2];

if (['ex1', undefined].includes(arg)) {
  console.log('Exercise 1 - Divisibles\n');
  exercise1(100);
}

if (arg === undefined) console.log('\n---------\n');

if (['ex2', undefined].includes(arg)) {
  const countries = require('../data/countries.json');
  console.log('Exercise 2 - Countries\n');
  const { numberOfContries, mostLangsDE, mostLangs, mostCommonLanguage } =
    exercise2(countries);

  console.log('Number of distinct inputted countries:');
  console.log(`-> ${numberOfContries}\n`);
  console.log('Country with most official languages that includes German:');
  console.log(`-> ${mostLangsDE.country} - [${mostLangsDE.languages.join(', ')}]\n`);
  console.log('Country with most official languages:');
  console.log(`-> ${mostLangs.country} - [${mostLangs.languages.join(', ')}]\n`);
  console.log('Most common language:');
  console.log(`-> ${mostCommonLanguage.language} - [${mostCommonLanguage.countries.join(', ')}]\n`);
}
