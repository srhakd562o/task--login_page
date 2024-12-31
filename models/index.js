const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database4', 'root', '@SITAram5620', {
    host: 'localhost',
    dialect: 'mysql', 
});

sequelize
    .authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));

module.exports = sequelize;
