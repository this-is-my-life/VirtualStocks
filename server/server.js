const superagent = require('superagent')

processStart()
setInterval(() => {
  processStart()
}, process.env.cycleDelay * 1000);

function processStart () {
  superagent.get('https://api.jsonbin.io/b/5c9cd7b9da12e364adfb7737/latest').then((response) => {
    response.body.info.routine++
    let last = new Date()
    let next = new Date()
    response.body.info.lastUpdate = last
    next.setTime(last.getTime() + (process.env.cycleDelay * 1000))
    response.body.info.nextUpdate = next
    for (let counter = 0; counter < response.body.chart.length; counter++) {
      response.body.chart[counter].before = response.body.chart[counter].after
      if (response.body.chart[counter].name === 'HC주식회사') {
        let random1 = getRandomInt(45, 58)
        let random2 = getRandomInt(1, 101)
        let random3 = getRandomInt(1, 41)
        if (random2 <= random1) {
          response.body.chart[counter].after += random3
        } else {
          response.body.chart[counter].after -= random3
        }
        if (response.body.chart[counter].after <= 0) {
          response.body.chart[counter].after = response.body.chart[counter].before
        }
      } else if (response.body.chart[counter].name === '뮤트테크') {
        let random1 = getRandomInt(44, 57)
        let random2 = getRandomInt(1, 101)
        let random3 = getRandomInt(1, 33)
        if (random2 <= random1) {
          response.body.chart[counter].after += random3
        } else {
          response.body.chart[counter].after -= random3
        }
        if (response.body.chart[counter].after <= 0) {
          response.body.chart[counter].after = response.body.chart[counter].before
        }
      } else if (response.body.chart[counter].name === 'TK전자') {
        let random1 = getRandomInt(35, 45)
        let random2 = getRandomInt(1, 101)
        let random3 = getRandomInt(1, 101)
        if (random2 <= random1) {
          response.body.chart[counter].after += random3
        } else {
          response.body.chart[counter].after -= random3
        }
        if (response.body.chart[counter].after <= 0) {
          response.body.chart[counter].after = response.body.chart[counter].before
        }
      } else if (response.body.chart[counter].name === 'PC가전') {
        let random1 = getRandomInt(43, 55)
        let random2 = getRandomInt(1, 101)
        let random3 = getRandomInt(1, 26)
        if (random2 <= random1) {
          response.body.chart[counter].after += random3
        } else {
          response.body.chart[counter].after -= random3
        }
        if (response.body.chart[counter].after <= 0) {
          response.body.chart[counter].after = response.body.chart[counter].before
        }
      } else if (response.body.chart[counter].name === '피엠산업') {
        let random1 = getRandomInt(42, 53)
        let random2 = getRandomInt(1, 101)
        let random3 = getRandomInt(1, 21)
        if (random2 <= random1) {
          response.body.chart[counter].after += random3
        } else {
          response.body.chart[counter].after -= random3
        }
        if (response.body.chart[counter].after <= 0) {
          response.body.chart[counter].after = response.body.chart[counter].before
        }
      } else if (response.body.chart[counter].name === '비빔밥사') {
        let random1 = getRandomInt(41, 53)
        let random2 = getRandomInt(1, 101)
        let random3 = getRandomInt(1, 13)
        if (random2 <= random1) {
          response.body.chart[counter].after += random3
        } else {
          response.body.chart[counter].after -= random3
        }
        if (response.body.chart[counter].after <= 0) {
          response.body.chart[counter].after = response.body.chart[counter].before
        }
      }
    }
    console.log(response.body)
    superagent.put('https://api.jsonbin.io/b/5c9cd7b9da12e364adfb7737').send(response.body).catch((err) => { console.log(err) })
  })
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
