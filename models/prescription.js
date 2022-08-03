import pool from '../db/index.js';

export async function getPrescriptions() {
  const res = await pool.query('Select * from prescription');
  return res.rows;
}
export async function getPrescriptionsById(id) {
  const res = await pool.query(
    'select * from prescription where patient_id=$1',
    [id]
  );
  return res.rows;
}
export async function pausePrescription(pres_id) {
  const res = await pool.query(
    'update prescription set active=$1 where prescription_id = $2 returning *',
    ['paused', pres_id]
  );
  return res.rows;
}

export async function deletePrescription(pres_id) {
  const res = await pool.query(
    'update prescription set active=$1 where  prescription_id = $2 returning *',
    ['inactive', pres_id]
  );
  return res.rows;
}
