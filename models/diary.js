import pool from '../db/index.js';

export async function getDiary() {
  const res = await pool.query('select * from diary');
  return res.rows;
}

export async function getDiaryById(id) {
  const res = await pool.query('select * from diary where patient_id=$1', [id]);
  return res.rows;
}

export async function newDiaryEntry(id, entry) {
  const res = await pool.query(
    'insert into diary (patient_id,date,mood,details) values ($1,$2,$3,$4) returning *;',
    [id, entry.date, entry.mood, entry.details]
  );
  return res.rows;
}
