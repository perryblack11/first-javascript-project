// Create a variabke for the questions and their answers
const questions = [
  {
    question: 'what is the tallest mountain in the world',
    answer: "everest",
    score: 5
  },
  {
    question: 'The I in IGHub stands for what?',
    answer: 'innovation',
    score: 3
  },
  {
    question: 'what food ingredient enhances taste?',
    answer: 'salt',
    score: 4
  },
  {
    question: 'what event is celebrated in December?',
    answer: 'Christmas',
    score: 8
  }
]

let totalScore = 0;

for(let i = 0; i < questions.length; i++){
  const x =questions[i];
  const userInput = prompt(x.question)
  
  if (userInput === x.answer){
    alert(`Correct! Your Score is ${totalScore + x.score}`);

    totalScore = totalScore + x.score;
  } else{
    alert(`Nope! The correct answer is ${x.answer}.`)
  }
}