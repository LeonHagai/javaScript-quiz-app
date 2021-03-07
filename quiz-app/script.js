const quizData = [
  {
    question: 'Which age group are you?',
    a: '18 - 24',
    b: '25 - 30',
    c: '31 - 38',
    d: '39 - 40',
    correct: 'b',
  }, {
    question: 'What is the most used programming language in 2019',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  }, {
    question: 'Who is the current President of Kenya?',
    a: 'Pombe Magufuli',
    b: 'Donald J. Trump',
    c: 'Uhuru Mwigai Kenyatta',
    d: 'Barack Obama',
    correct: 'c',
  }, {
    question: 'What does BBI mean',
    a: 'Building Bridges Is-sensitive',
    b: 'Building Bridges Initiative',
    c: 'Because Bob Insists',
    d: 'Bora Bandi I',
    correct: 'b',
  }, {
    question: 'What is your sign',
    a: 'Scorpio',
    b: 'Leo',
    c: 'Cancer',
    d: 'Virgo',
    correct: 'a',
  }
]

//initializing elements
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnSubmit = document.getElementById('submit');

//refering to input via class
const answerEls = document.querySelectorAll(".answer");


//index of quiz in array
let currentQuiz = 0;
//keeping of pressed
let score = 0;

//called everytime we submit
loadQuiz();

function loadQuiz() {
  // when btn click 
  deselectAnswers();

  //get current quiz data with accordance to current index from array
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

//--submit btn clicked
//**TODO: capture result 
btnSubmit.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    //increment index
    currentQuiz++;
    // --loading next query
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // TODO: capture result
      quiz.innerHTML = `
      <h2 style="padding: 20px; color: #393499; "> Correct answer were ${score} / ${quizData.length} in the questions </h2>
      
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});

