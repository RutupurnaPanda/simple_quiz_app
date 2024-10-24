const questions = [
    { question: '5 + 3', answer: 8 },
    { question: '12 - 7', answer: 5 },
    { question: '6 * 3', answer: 18 },
    { question: '9 / 3', answer: 3 },
    { question: '15 % 4', answer: 3 },
    { question: '3 % 2 +7', answer: 8}
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next');

// Load the first question
function loadQuestion() {
    questionElement.textContent = questions[currentQuestionIndex].question;
    answerInput.value = '';
    feedbackElement.textContent = '';
    submitButton.disabled = false;
    nextButton.classList.add('hidden');
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
        score++;
    } else {
        feedbackElement.textContent = `Wrong! The correct answer was ${correctAnswer}.`;
        feedbackElement.style.color = 'red';
    }

    scoreElement.textContent = `Score: ${score}`;
    submitButton.disabled = true;
    nextButton.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions.length) {
        questionElement.textContent = 'Quiz over! Your final score is ' + score + '.';
        feedbackElement.textContent = '';
        submitButton.disabled = true;
        answerInput.disabled = true;
        nextButton.classList.add('hidden');
    } else {
        loadQuestion();
    }
}

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);

// Initial setup
loadQuestion();
