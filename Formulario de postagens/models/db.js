const Sequelize = require('sequelize')

// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', '1620', {
    host: 'localhost',
    dialect: 'mysql',
    query: { raw: true }
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}