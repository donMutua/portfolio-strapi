const path = require("path");

export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    useNullAsDefault: true,
  },
});
