import assert from 'assert';

assert.deepEqual(verifyGuess("123", "123"), {
  strike: 3,
  ball: 0,
})