const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'dev_todo',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = sequelize
