// let playe = function(){document.getElementById("audio").play()}
// above 2 lines for music add
let play = function(){document.getElementById("videoBG").play()}
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
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
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
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
    question: 'Who designed the national flag of India ?',
    answers: [
      { text: 'Pingali Venkayya', correct: true },
      { text: 'G.K.Gokhale', correct: false },
      { text: 'Dadabhai Naroji', correct: false },
      { text: 'Pherozeshah Mehta', correct: false }
    ]
  },
  {
    question: 'In which year did the Quit India Movement begin ?',
    answers: [
      { text: '1938', correct: false },
      { text: '1942', correct: true },
      { text: '1945', correct: false },
      { text: '1948', correct: false }
    ]
  },
  {
    question: 'What is the official approx. duration of the Indian National Anthem ?',
    answers: [
      { text: '50', correct: false },
      { text: '51', correct: false },
      { text: '52', correct: true },
      { text: '53', correct: false }
    ]
  },
  {
    question: 'How many princely states were there in the country before Independence ?',
    answers: [
      { text: '543', correct: false },
      { text: '550', correct: false },
      { text: '565', correct: true },
      { text: '575', correct: false }
    ]
  },
  {
    question: 'What is ratio of the length and width of the our national flag ?',
    answers: [
      { text: '3:2', correct: true },
      { text: '2:2', correct: false },
      { text: '2:3', correct: false },
      { text: '2:1', correct: false }
    ]
  },
  {
    question: 'The writer of our national anthem is -',
    answers: [
      { text: 'Rabindra Nath Tagore', correct: false },
      { text: 'Bankimchandra Chatterjee', correct: false },
      { text: 'Mohd Iqbal', correct: true },
      { text: 'Aurobindo Ghosh', correct: false }
    ]
  },
  {
    question: 'How many spokes are there in the Ashoka Chakra ?',
    answers: [
      { text: '32', correct: false },
      { text: '28', correct: false },
      { text: '30', correct: false },
      { text: '24', correct: true }
    ]
  }
]