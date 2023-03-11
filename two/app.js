const quizData = [
  {
    question: 'Name all five Brontë sisters?',
    a: 'Emma,Ava, Amelia, Evelyn and Harper ',
    b: 'Emily, Elizabeth, Charlotte, Anne and Maria',
    c: 'Sarah, Freya, Chole, Ann and Mia',
    d: 'Olivia, Tatiana, Dana, Sophia and Isabella',
    correct: 'b',
  },{
    question: 'Which Stephen King novel takes place mostly in the fictional Overlook Hotel?',
    a: 'The Mirror ',
    b: 'The Curtain',
    c: 'The Piano',
    d: 'The Shining',
    correct: 'd',

  },{
    question: 'What do Lord of the Rings author J.R.R. Tolkiens initials stand for?',
    a: 'Thomas Smith',
    b: 'Tim Pillgram',
    c: 'John Ronald Reuel',
    d: 'Joe Doe',
    correct: 'c',
  },{
    question:'What is the best-selling novel of all time?',
    a: 'Don Quixote',
    b: 'A Tale of Two Cities',
    c: 'The Lord of the Rings ',
    d: 'The Little Prince',
    correct: 'a',

  },{
    question:'Who authored The Hunger Games book series?',
    a: 'Charles Dickens',
    b: 'Suzanne Collins',
    c: 'Fyodor Dostoevsky',
    d: 'William Shakespeare',
    correct: 'b',
  }
]
const answerEls = document.querySelectorAll('.answer');
const quiz =document.getElementById('quiz');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("btn");

let currQuestion = 0;
// let answer=undefined;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswers();

  const currQuizData = quizData[currQuestion];

  questionEl.innerText = currQuizData.question;
  a_text.innerText = currQuizData.a;
  b_text.innerText = currQuizData.b;
  c_text.innerText = currQuizData.c;
  d_text.innerText = currQuizData.d;

 
}

function getSelected(){
 let answer = undefined;

  answerEls.forEach((answerEl) => {
    // console.log(answer.checked);
    if(answerEl.checked){
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


submitBtn.addEventListener('click', () =>{
  // check to see the answer
  const answer = getSelected();

  if(answer){
    if (answer === quizData[currQuestion].correct){
      score++;
    }
    
    currQuestion++;
    if(currQuestion < quizData.length){
      loadQuiz();
    }else{
      quiz.innerHTML =`<h2>You aswerd correctly at ${score}/${quizData.length} questions.</h2>
      <button onclick="location.reload()">Reload</button>`
      ;
    }
  }      

  
});
