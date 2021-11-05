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

const elDay = document.querySelector('#daily-btn')
const elWeek = document.querySelector('#weekly-btn')
const elMonth = document.querySelector('#monthly-btn')

const data = fetch('./data.json').then(response => data.json())

const objData = new Promise((resolve, reject) => {
  resolve = await data.json()
})
