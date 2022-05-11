const db = require('../config/db')()
const { DataTypes } = require('sequelize')

const Task = db.define(
    'Task',
    {
        task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }
)

module.exports = Task
