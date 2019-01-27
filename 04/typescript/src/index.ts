import assert from 'assert';

const verifyGuess = (guess: string, actual: string) => {
  let ball = 0;
  const strike = Array.from(guess).reduce((acc, curr, idx) => {
    if (curr === actual[idx]) {
      return acc + 1;
    } else {
      if (actual.includes(curr)) {
        ball++;
      }
      return acc;
    }
  }, 0);
  
  return {
    strike,
    ball,
  }
}

assert.deepEqual(verifyGuess("123", "123"), {
  strike: 3,
  ball: 0,
});

assert.deepEqual(verifyGuess("123", "139"), {
  strike: 1,
  ball: 1,
});

assert.ifError(verifyGuess("999", "999"));