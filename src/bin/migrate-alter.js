require('dotenv').config()
const db = require('../config/db')
const Task = require('../models/Task')

db.sync({alter: true})