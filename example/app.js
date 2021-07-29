const express = require('express')

const metrics = require('./metrics')

const app = express()
app.use(metrics.counter)

app.get('/nice', (req, res) => {
  res.send('nice')
})

app.get('/hello', (req, res) => {
  res.send('world')
})

app.listen(8080, () => {
  console.log('Express started')
})
