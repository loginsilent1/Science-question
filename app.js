// Example: change this to 'physicsQuestions' or 'englishQuestions' or 'biologyQuestions' from your question files
import questions from './physics.js';

// Shuffle the questions array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledQuestions = shuffleArray([...questions]);

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next');
const resultContainer = document.getElementById('result');

function showQuestion() {
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionContainer.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option-btn');
    button.onclick = () => checkAnswer(button, currentQuestion.answer);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedButton, correctAnswer) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(button => button.disabled = true);

  if (selectedButton.innerText === correctAnswer) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('wrong');
    buttons.forEach(button => {
      if (button.innerText === correctAnswer) {
        button.classList.add('correct');
      }
    });
  }
  nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
    nextButton.style.display = 'none';
  } else {
    showResult();
  }
});

function showResult() {
  questionContainer.innerHTML = `Quiz Completed!`;
  optionsContainer.innerHTML = `Your score is ${score} out of ${shuffledQuestions.length}.`;
  nextButton.style.display = 'none';
}

showQuestion();
