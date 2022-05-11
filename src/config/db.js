const { Sequelize } = require('sequelize')
const Vault = require('../utils/vault');

const sequelize = new Sequelize(
    config.database,
    '',
    '',
    config
)
sequelize.beforeConnect(async (config) => {
    const vault = new Vault(process.env.VAULT_URL, process.env.JWT_PATH);
    await vault.login();
    const dbConfig = await vault.getConfig(process.env.CONFIG_PATH);
    console.log(dbConfig)
    
    config.database = dbConfig.db_name;
    config.username = dbConfig.db_user;
    config.password = dbConfig.db_password;
    config.host = process.env.DB_HOST;
    config.dialect = 'mysql';
    config.logging = process.env.NODE_ENV === 'production' ? false : console.log;
})

module.exports = sequelize;
