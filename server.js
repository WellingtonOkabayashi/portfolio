const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {
  try {
    const { data } = await axios(
      'https://wellingtonokabayashi.github.io/login-system/api/index.json'
    )
    console.log(data)

    return res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.listen('3110')
