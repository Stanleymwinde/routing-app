const express = require('express')
const cors = require('cors')
const app = express()
require ('dotenv').config()

app.use(cors())
app.use(express.json())

const users = [
  {"id":1, "name": "John", "age": 20},
  {"id":2, "name": "Peter", "age": 60},
  {"id":3, "name": "Mary", "age": 30}
]

app.get('/', (req, res) => {
  res.send("Public content")
})

app.get('/users', (req, res) => {
  res.json(users)
})

const port = process.env.PORT || 6000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})