const { Sequelize } = require('sequelize')
const Vault = require('../utils/vault');

const vault = new Vault(process.env.VAULT_URL, process.env.JWT_PATH);

let db_name;
let db_user;
let db_password;

const fetchConfig = async () => {
    await vault.login();
    const config = await vault.getConfig(process.env.CONFIG_PATH);

    console.log(config);

    db_name = config.db_name;
    db_user = config.db_user;
    db_password = config.db_password;
}

const initSequelize = () => {
    fetchConfig().then(() => {
        const sequelize = new Sequelize(
            db_name,
            db_user,
            db_password,
            {
                host: process.env.DB_HOST,
                dialect: 'mysql',
                logging: process.env.NODE_ENV === 'production' ? false : console.log
            }
        )
    })

    return sequelize
}

module.exports = initSequelize();
