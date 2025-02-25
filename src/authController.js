const axios = require('axios');
const config = require('./config');

class AuthController {
    
    static redirectToLogin(req, res) {
        const state = Math.random().toString(36).substring(7); // Token de segurança
        const loginUrl = `${config.authUrl}/login?client_id=${config.clientId}&redirect_uri=${config.redirectUri}&state=${state}`;
        res.redirect(loginUrl);
    }

    static async handleCallback(req, res) {
        const { code, state } = req.query;

        if (!code) {
            return res.status(400).json({ error: 'Código de autenticação ausente.' });
        }

        try {
            const response = await axios.post(`${config.authUrl}/oauth/token`, {
                client_id: config.clientId,
                client_secret: config.clientSecret,
                code,
                redirect_uri: config.redirectUri,
                grant_type: 'authorization_code'
            });

            const { access_token } = response.data;
            return res.json({ token: access_token });

        } catch (error) {
            return res.status(500).json({ error: error.response?.data || 'Erro na autenticação' });
        }
    }

    static async validateLogin(req, res) {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ error: 'Token ausente.' });
        }

        try {
            const response = await axios.post(config.validateUrl, { token });
            return res.json(response.data);

        } catch (error) {
            return res.status(500).json({ error: error.response?.data || 'Erro na validação' });
        }
    }
}

module.exports = AuthController;
