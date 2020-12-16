const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let countRightAnswers = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  countRightAnswers = 0;
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart you fool. Press and redo the questions over and over and over...'
    startButton.classList.remove('hide')
  }
  if (selectedButton.dataset = correct) {countRightAnswers++;}
  document.getElementById('right-answers').innerHTML = countRightAnswers;
  }
  

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is his full name?',
    answers: [
      { text: 'Kermit the Frog', correct: true },
      { text: 'Kermit Kamel Rene the Frog', correct: false },
      { text: 'Kermit Samiend Frog', correct: false },
      { text: 'Kermit Elias Frog', correct: false }
    ]
  },
  {
    question: 'What show did Kermit make a debut on?',
    answers: [
      { text: 'Seasame Street', correct: false },
      { text: 'The Muppet Show', correct: false },
      { text: 'The Jim Henson Hour', correct: false },
      { text: 'Sam and Friends', correct: true }
    ]
  },
  {
    question: 'What animal was he originally?',
    answers: [
      { text: 'He was always a frog', correct: false },
      { text: 'He was a reptilian-like creature', correct: true },
      { text: 'He was not even an animal', correct: false },
      { text: 'He was a toad', correct: false }
    ]
  },
  {
    question: 'What is the name of Kermit\'s nephew?',
    answers: [
      { text: 'Rodney', correct: false },
      { text: 'Ronnie', correct: false },
      { text: 'Robert', correct: false },
      { text: 'Robin', correct: true }
    ]
  },
   {
    question: 'What year was Kermit introduced?',
    answers: [
      { text: '1955', correct: true },
      { text: '1956', correct: false },
      { text: '1957', correct: false },
      { text: '1958', correct: false }
    ]
  },
   {
    question: 'When did the "Kermit sipping tea" meme come out?',
    answers: [
      { text: 'January 2015', correct: false },
      { text: 'Feburary 2014', correct: false },
      { text: 'January 2014', correct: true },
      { text: 'Devember 2013', correct: false }
    ]
  },
  {
    question: 'What did Kermit say in "The Muppets Show: Sex and Violence?"',
    answers: [
      { text: 'He was not in the show', correct: false },
      { text: 'He was in the audience watching a wrestling sketch', correct: true },
      { text: 'He said, "oh no!" then run away', correct: false },
      { text: 'He was eating some fries as he watched people chase each other', correct: false }
    ]
  },
   {
    question: 'Which one of these is not his published book?"',
    answers: [
      { text: 'One Frog Can Make a Difference: Kermit\'s Guide to Life in the Nineties', correct: false },
      { text: 'For Every Child, A Better World', correct: false },
      { text: 'Let\'s be happy with Kermit', correct: true },
      { text: 'Kermit\'s Garden of Verses', correct: false }
    ]
  },
     {
    question: 'What character did Kermit play in the 1992 film, "A Muppet Christmas Carol?"',
    answers: [
      { text: 'Charles Dickens', correct: false },
      { text: 'Bob Cratchitt', correct: true },
      { text: 'Scrooge', correct: false },
      { text: 'Jacob Marley', correct: false }
    ]
  },
  {
    question: 'Where did the "Evil Kermit" come from?',
    answers: [
      { text: 'Muppets Most Wanted', correct: true },
      { text: 'A Muppet Christmas Carol', correct: false },
      { text: 'The Muppets Show: Sex and Violence', correct: false },
      { text: 'The Greak Mupper Caper', correct: false }
    ]
  }  
]