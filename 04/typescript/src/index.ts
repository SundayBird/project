import assert from 'assert';
import readline from 'readline';

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

const game = (actual: string) => {
  assert(actual.length === 3);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (input) => {
    const guessResult = verifyGuess(input, actual);
    if (guessResult.strike === 3) {
      console.log("정답입니다!");
      rl.close();
    } else {
      console.log(guessResult);
    }
  });
  return true;
}

game("264");

assert.deepEqual(verifyGuess("123", "123"), {
  strike: 3,
  ball: 0,
});

assert.deepEqual(verifyGuess("123", "139"), {
  strike: 1,
  ball: 1,
});
