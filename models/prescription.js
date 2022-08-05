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
export async function makePrescription(patient_id, pres) {
  const res = await pool.query(
    'insert into prescription (patient_id,date,dosage,frequency,measurement,monitoring,monitoringfrequency,monitoringschedule,name,override,quantity,reason,status,total,type) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning *;',
    [
      patient_id,
      pres.date,
      pres.dosage,
      pres.frequency,
      pres.measurement,
      pres.monitoring,
      pres.monitoringFrequency,
      pres.monitoringSchedule,
      pres.name,
      pres.override,
      pres.quantity,
      pres.reason,
      pres.status,
      pres.total,
      pres.type,
    ]
  );
  return res.rows;
}
