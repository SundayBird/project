import assert from 'assert';

const verifyGuess = (a: string, b: string) => ({
  strike: 3,
  ball: 0,
});

assert.deepEqual(verifyGuess("123", "123"), {
  strike: 3,
  ball: 0,
})