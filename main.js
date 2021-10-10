let requestUrl = './data.json'
let request = new XMLHttpRequest()
request.open('GET', requestUrl)

request.responseType = 'json'
request.send()

request.onload = function () {
  let period = request.response
  console.log(period)
  for (let i in period) {
    let title = period[i]['title']
    let current = period[i]['timeframes'].daily['current']
    let previous = period[i]['timeframes'].daily['previous']
    console.log(title, current, previous)
  }
}
