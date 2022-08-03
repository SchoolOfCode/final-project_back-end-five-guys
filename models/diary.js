import pool from '../db/index.js';

export async function getDiary() {
  const res = await pool.query('select * from diary');
}

export async function getPatients() {}
