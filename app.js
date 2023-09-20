const readline = require('readline');
const { getRandomSentence } = require('./generateSentences'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("WELCOME TO NUCLEOTYPE");

function calculateAccuracy(expected, answer){
    let correctChars = 0;
    const minLength = Math.min(expected.length,answer.length);

    for (let i = 0; i < minLength; i++) {
      if (expected[i] === answer[i]) {
        correctChars++;
      }
    }
    return(correctChars/minLength)*100;
}

const randomSentence = getRandomSentence();

const startTime = Date.now();

rl.question(`Type the following sentence:\n"${randomSentence}"\n`, (answer) => {
    const endtime = Date.now();
    const elapsedTime = (endtime - startTime)/1000;
    const typingspeed = (randomSentence.length/5)/(elapsedTime/60);
    const accuracy = calculateAccuracy(randomSentence, answer);
  if (answer === randomSentence) {
    console.log('Congratulations! You typed it correctly.');
  } else {
    console.log('Sorry, your input is incorrect.');
  }
  console.log(`Typing Speed: ${typingspeed.toFixed(2)} WPM`);
  console.log(`Accuracy:${accuracy.toFixed(2)}%`);
  
  rl.close();
});
