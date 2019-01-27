import assert from 'assert';

const verifyGuess = (guess: string, actual: string) => {
  const strike = Array.from(guess).reduce((acc, curr, idx) => {
    if (curr === actual[idx]) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  const ball = 0;
  return {
    strike,
    ball,
  }
}

assert.deepEqual(verifyGuess("123", "123"), {
  strike: 3,
  ball: 0,
});

assert.deepEqual(verifyGuess("127", "123"), {
  strike: 2,
  ball: 1,
});