const express = require('express');
const routes = require('./Routes/routes');
// const sequelize = require('../config/database');  // ainda não fiz
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// sequelize.sync();  // ainda não fiz

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});