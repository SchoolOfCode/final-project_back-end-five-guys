import pool from '../db/index.js';

//gets all pending prescriptions
export async function getPending() {
  const res = await pool.query('SELECT * FROM pending');
  return res.rows;
}
