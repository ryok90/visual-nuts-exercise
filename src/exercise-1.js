const exercise1 = (max) => {
  for (let i = 1; i <= max; i++) {
    const prints = [];

    if (i % 3 === 0) prints.push('Visual');
    if (i % 5 === 0) prints.push('Nuts');

    console.log(prints.length ? prints.join(' ') : i);
  }
};

module.exports = exercise1;
