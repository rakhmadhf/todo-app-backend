require('dotenv').config({path: process.env.SECRET_FILE_PATH})
const express = require('express')
const cors = require('cors')
const api = require('./api/routes')
const syncDb = require('./utils/syncDb')

const PORT = 3000

syncDb()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1', api)

app.listen(PORT, () => {
    console.log(`⚡ App is listening on port ${PORT}`)
})
