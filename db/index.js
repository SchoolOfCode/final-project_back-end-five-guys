import pg from 'pg';
import 'dotenv/config';
export default new pg.Pool({
  connectionString: process.env.HEROKU_URI,
  ssl: {
    rejectUnauthorized: false,
  },
});
