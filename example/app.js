const express = require('express')

const app = express()

app.get('/nice', (req, res) => {
  res.send('nice')
})

app.get('/hello', (req, res) => {
  res.send('world')
})

app.listen(8080, () => {
  console.log('Express started')
})
