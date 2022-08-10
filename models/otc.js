import pool from '../db/index.js';
export async function getOTC() {
  const res = await pool.query('select * from otc');
  return res.rows;
}

export async function getOTCByPatient(email) {
  const res = await pool.query(
    'select * from otc where patient_id=(select patient_id from patient where email=$1)',
    [email]
  );
  return res.rows;
}
export async function registerOTC(email, obj) {
  const patient = await pool.query('select * from patient where email=$1', [
    email,
  ]);
  console.log('heyo, result', patient);
  const res = await pool.query(
    'insert into otc (name,reason,patient_id) VALUES ($1,$2,$3) returning *',
    [obj.name, obj.reason, patient.rows[0].patient_id]
  );
  return res.rows;
}
