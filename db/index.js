import pg from 'pg';
import 'dotenv/config';
export default new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
