const express = require('express')
const api = require('./api/routes')
const syncDb = require('./utils/syncDb')

const PORT = 3000

syncDb()

const app = express()

app.use(express.json())

app.use('/api/v1', api)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
