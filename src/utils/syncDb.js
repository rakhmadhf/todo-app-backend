const db = require('../config/db')()
const Task = require('../models/Task')

module.exports = () => {
    db.sync()
}