// app.js

let questions = [];
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Elements
const subjectSelectEl = document.getElementById('subject-select');
const quizSection = document.getElementById('quiz');
const questionEl  = document.getElementById('question');
const optionsEl   = document.getElementById('options');
const nextBtn     = document.getElementById('next');
const resultEl    = document.getElementById('result');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz(subject) {
  // pick the global array based on subject
  if (subject === 'physics') questions = physicsQuestions;
  if (subject === 'biology') questions = biologyQuestions;
  if (subject === 'english') questions = englishQuestions;

  shuffledQuestions = shuffleArray([...questions]);
  currentQuestionIndex = 0;
  score = 0;

  subjectSelectEl.style.display = 'none';
  quizSection.style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const q = shuffledQuestions[currentQuestionIndex];
  questionEl.textContent = `${currentQuestionIndex + 1}. ${q.question}`;
  optionsEl.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option-btn';
    btn.onclick = () => checkAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = 'none';
  resultEl.textContent = '';
}

function checkAnswer(selectedBtn, correctAnswer) {
  // disable all
  document.querySelectorAll('.option-btn').forEach(b=>b.disabled=true);
  if (selectedBtn.textContent === correctAnswer) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('wrong');
    // highlight correct
    document.querySelectorAll('.option-btn').forEach(b=>{
      if (b.textContent === correctAnswer) b.classList.add('correct');
    });
  }
  nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.textContent = 'Quiz Complete!';
  optionsEl.innerHTML = '';
  resultEl.innerHTML = `Your score: ${score} / ${shuffledQuestions.length}`;
  nextBtn.style.display = 'none';
}

// Wire up the subject buttons
document.getElementById('btn-physics').addEventListener('click', ()=> startQuiz('physics'));
document.getElementById('btn-biology').addEventListener('click', ()=> startQuiz('biology'));
document.getElementById('btn-english').addEventListener('click', ()=> startQuiz('english'));
