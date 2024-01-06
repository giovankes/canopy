import "dotenv/config";

const config = {
  client: "mysql",
  connection: {
    charset: "utf8mb4",
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
};

export default {
  development: config,
  staging: config,
  testing: config,
  production: config,
};
