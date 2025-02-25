const express = require('express');
const cors = require('cors');
const AuthController = require('./authController');
const config = require('./config');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/login', AuthController.redirectToLogin);
app.get('/callback', AuthController.handleCallback);
app.post('/validate-login', AuthController.validateLogin);

app.listen(config.port, () => {
    console.log(`Servidor rodando na porta ${config.port}`);
});
