require('dotenv').config();

module.exports = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    authUrl: process.env.API_AUTH_URL,
    validateUrl: process.env.API_VALIDATE_URL,
    port: process.env.PORT || 3000
};
