const exercise1 = require('./exercise-1');

describe('exercise-1', () => {
  it('should respect divisible rules (by 3, 5, and both)', () => {
    const mockLog = jest.spyOn(console, 'log').mockImplementation(() => null);
    const max = Math.floor(Math.random() * 1001);
    const logs = [];

    exercise1(max);

    for (let i = 1; i <= max; i++) {
      const prints = [];

      if (i % 3 === 0) prints.push('Visual');
      if (i % 5 === 0) prints.push('Nuts');

      logs.push([prints.length ? prints.join(' ') : expect.anything()]);
    }
    expect(mockLog.mock.calls).toEqual(logs);
  });
});
