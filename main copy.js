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
let currentWeekly
let previousWeekly

function dailyProfile(title, current, previous) {
  msg1 = `<h2>
    <a id="daily-btn" href="#">${title}</a>
    </h2>
    <h1>${current}h</h1>`
  msg2 = `<h1>...</h1>
    <p>Yesterday-${previous}h</p>`
  currentProfile(title, msg1, msg2)
}

function weeklyProfile(period) {
  for (let i in period) {
    title = period[i]['title']
    msg1 = `<h2>
      <a id="weekly-btn" href="#">${title}</a>
      </h2>
      <h1>${current}h</h1>`
    msg2 = `<h1>...</h1>
      <p>Last Week-${previous}h</p>`

    currentProfile(title, msg1, msg2)
  }
}

function monthlyProfile(period) {
  for (let i in period) {
    title = period[i]['title']
    msg1 = `<h2>
      <a id="monthly-btn" href="#">${title}</a>
      </h2>
      <h1>${current}h</h1>`
    msg2 = `<h1>...</h1>
      <p>Last Month-${previous}h</p>`

    currentProfile(title, msg1, msg2)
  }
}

const request = fetch('./data.json')
  .then(response => response.json())
  .then(data => requestMaker(data))

let elDay = document.querySelector('#daily-btn')
let elWeek = document.querySelector('#weekly-btn')
let elMonth = document.querySelector('#monthly-btn')

let current = ''
let previous = ''
function requestMaker(data) {
  data.forEach(function (dado) {
    elDay.addEventListener('click', dailyProfile(dado.timeframes.daily))
    elWeek.addEventListener('click', weeklyProfile(dado.timeframes.weekly))
    elMonth.addEventListener('click', monthlyProfile(dado.timeframes.monthly))
    if (elDay) {
      title = dado['title']
      current = dado.timeframes.daily['current']
      previous = dado.timeframes.daily['previous']
      console.log('day', dado.timeframes.daily)
    }

    if (elWeek) {
      title = dado['title']
      current = dado.timeframes.weekly['current']
      previous = dado.timeframes.weekly['previous']
      console.log('week', dado.timeframes.weekly)
    }

    if (elMonth) {
      title = dado['title']
      current = dado.timeframes.monthly['current']
      previous = dado.timeframes.monthly['previous']
      console.log('month', dado.timeframes.monthly)
    }
    dailyProfile(title, current, previous)
  })
}
