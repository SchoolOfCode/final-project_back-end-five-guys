import pool from '../db/index.js';

//gets all pending prescriptions
export async function getPending() {
  const res = await pool.query(
    'SELECT * FROM pending join patient on patient.patient_id=pending.patient_id'
  );
  return res.rows;
}

export async function deletePending(id) {
  const res = await pool.query(
    'delete FROM pending where pending_id=$1 returning *',
    [id]
  );
  return res.rows;
}
