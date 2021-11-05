const titleWorkCard = document.querySelector('.work-card')
const titlePlayCard = document.querySelector('.play-card')
const titleStudyCard = document.querySelector('.study-card')
const titleExerciseCard = document.querySelector('.exercise-card')
const titleSocialCard = document.querySelector('.social-card')
const titleSelfCareCard = document.querySelector('.selfcare-card')
const titleWork2Card = document.querySelector('.work2-card')
const titlePlay2Card = document.querySelector('.play2-card')
const titleStudy2Card = document.querySelector('.study2-card')
const titleExercise2Card = document.querySelector('.exercise2-card')
const titleSocial2Card = document.querySelector('.social2-card')
const titleSelfCare2Card = document.querySelector('.selfcare2-card')

let msg1
let msg2
let title
let currentWeekly
let previousWeekly

function byDay() {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      for (element of data) {
        msg1 = `<h2><a id="daily-btn" href="#">${element.title}</a></h2>
    <h1>${element.timeframes.daily.current}h</h1>`
        msg2 = `<h1>...</h1>
    <p>Yesterday-${element.timeframes.daily.previous}h</p>`
        currentProfile(element.title, msg1, msg2)
      }
    })
}

function byWeek(period) {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      for (element of data) {
        msg1 = `<h2><a id="daily-btn" href="#">${element.title}</a></h2>
    <h1>${element.timeframes.weekly.current}h</h1>`
        msg2 = `<h1>...</h1>
    <p>Yesterday-${element.timeframes.weekly.previous}h</p>`
        currentProfile(element.title, msg1, msg2)
      }
    })
}

function byMonth(period) {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      for (element of data) {
        msg1 = `<h2><a id="daily-btn" href="#">${element.title}</a></h2>
    <h1>${element.timeframes.monthly.current}h</h1>`
        msg2 = `<h1>...</h1>
    <p>Yesterday-${element.timeframes.monthly.previous}h</p>`
        currentProfile(element.title, msg1, msg2)
      }
    })
}

function currentProfile(title, msg1, msg2) {
  if (title == 'Work') {
    titleWorkCard.innerHTML = msg1
    titleWork2Card.innerHTML = msg2
  } else if (title == 'Play') {
    titlePlayCard.innerHTML = msg1
    titlePlay2Card.innerHTML = msg2
  } else if (title == 'Study') {
    titleStudyCard.innerHTML = msg1
    titleStudy2Card.innerHTML = msg2
  } else if (title == 'Exercise') {
    titleExerciseCard.innerHTML = msg1
    titleExercise2Card.innerHTML = msg2
  } else if (title == 'Social') {
    titleSocialCard.innerHTML = msg1
    titleSocial2Card.innerHTML = msg2
  } else if (title == 'Self Care') {
    titleSelfCareCard.innerHTML = msg1
    titleSelfCare2Card.innerHTML = msg2
  }
}
