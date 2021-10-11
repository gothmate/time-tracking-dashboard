let titleWorkCard = document.querySelector('.work-card')
let titlePlayCard = document.querySelector('.play-card')
let titleStudyCard = document.querySelector('.study-card')
let titleExerciseCard = document.querySelector('.exercise-card')
let titleSocialCard = document.querySelector('.social-card')
let titleSelfCareCard = document.querySelector('.selfcare-card')

let titleWork2Card = document.querySelector('.work2-card')
let titlePlay2Card = document.querySelector('.play2-card')
let titleStudy2Card = document.querySelector('.study2-card')
let titleExercise2Card = document.querySelector('.exercise2-card')
let titleSocial2Card = document.querySelector('.social2-card')
let titleSelfCare2Card = document.querySelector('.selfcare2-card')

/* let requestUrl = './data.json'
let request = new XMLHttpRequest()
request.open('GET', requestUrl)
request.responseType = 'json'
request.send() */

const request = fetch('./data.json')
  .then(response => response.json())
  .then(data => data)

console.log(request)
var period

request.onload = function () {
  period = request
  let elDay = document.querySelector('#daily-btn')
  let elWeek = document.querySelector('#weekly-btn')
  let elMonth = document.querySelector('#monthly-btn')

  elMonth.addEventListener('click', monthlyProfile(period))
  elDay.addEventListener('click', dailyProfile(period))
  elWeek.addEventListener('click', weeklyProfile(period))
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

let msg1
let msg2
let title

function dailyProfile(period) {
  for (let i in period) {
    title = period[i]['title']
    let currentDaily = period[i]['timeframes'].daily['current']
    let previousDaily = period[i]['timeframes'].daily['previous']
    msg1d = `<h2>
    <a id="daily-btn" href="#">${title}</a>
    </h2>
    <h1>${currentDaily}hrs</h1>`
    msg2d = `<h1>...</h1>
    <p>Yesterday-${previousDaily}hrs</p>`
    currentProfile(title, msg1d, msg2d)
  }
}

function weeklyProfile(period) {
  for (let i in period) {
    title = period[i]['title']
    const currentWeekly = period[i]['timeframes'].weekly['current']
    const previousWeekly = period[i]['timeframes'].weekly['previous']
    msg1w = `<h2>
      <a id="weekly-btn" href="#">${title}</a>
      </h2>
      <h1>${currentWeekly}hrs</h1>`
    msg2w = `<h1>...</h1>
      <p>Last Week-${previousWeekly}hrs</p>`

    currentProfile(title, msg1w, msg2w)
  }
}

function monthlyProfile(period) {
  for (let i in period) {
    title = period[i]['title']
    const currentMonthly = period[i]['timeframes'].monthly['current']
    const previousMonthly = period[i]['timeframes'].monthly['previous']
    msg1m = `<h2>
      <a id="monthly-btn" href="#">${title}</a>
      </h2>
      <h1>${currentMonthly}hrs</h1>`
    msg2m = `<h1>...</h1>
      <p>Last Month-${previousMonthly}hrs</p>`

    currentProfile(title, msg1m, msg2m)
  }
}
