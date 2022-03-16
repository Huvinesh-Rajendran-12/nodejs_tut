const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,
  output: process.stdout});

// num1 from 1-10
const num1 = Math.floor(Math.random() * 10 + 1);
// num2 from 1-10
const num2 = Math.floor(Math.random() * 10 + 1);
// answer of addtion of num1 and num2
const answer = num1 + num2;

// asking user to guess which is the addution of num1 and num2
rl.question(`What is ${num1} + ${num2}?\n`, (userAnswer) => {
  if (userAnswer.trim() == answer) {
    console.log('Correct!');
  } else {
    console.log(`Wrong! The correct answer was ${answer}`);
  }
  rl.close();
});
