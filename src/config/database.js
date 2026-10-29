const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
);

async function iniciarServidor() {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco!');
    } catch (error) {
        console.error('Erro ao conectar:', error);
    }
}

iniciarServidor();

module.exports = sequelize;