module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "dsdsdadsd"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "dsdsdadsd"),
  },
});
