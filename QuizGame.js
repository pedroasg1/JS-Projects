const questions = [
  {
    category: "General",
    question: "What is your name?",
    choices: ["My name is Pedro", "I am 18 years old", "I live in Mexico"],
    answer: "My name is Pedro"
  },
  {
    category: "Location",
    question: "Where are you from?",
    choices: ["I am from Mexico", "I like pizza", "I am happy"],
    answer: "I am from Mexico"
  },
  {
    category: "Age",
    question: "How old are you?",
    choices: ["I am 18 years old", "I play soccer", "I study math"],
    answer: "I am 18 years old"
  },
  {
    category: "Preference",
    question: "Do you like music?",
    choices: ["Yes, I do", "I have a dog", "I wake up early"],
    answer: "Yes, I do"
  },
  {
    category: "Activity",
    question: "What do you do?",
    choices: ["I am a student", "I drink water", "I sleep a lot"],
    answer: "I am a student"
  }
];

function getRandomQuestion(questArr){
  let randomNum = Math.floor(Math.random() * questArr.length);
  return questArr[randomNum];
}              

function getRandomComputerChoice(choiceArr){
  let randomNum = Math.floor(Math.random() * choiceArr.length);
  return choiceArr[randomNum];
}

function getResults(questionObj, computerChoice){
  if (questionObj.answer == computerChoice){
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}