import pool from '../db/index.js';

//gets all details for a certain doctor
export async function getDoctorById(doctor_id) {
  const res = await pool.query('SELECT * from doctor WHERE doctor_id = $1;', [
    doctor_id,
  ]);
  return res.rows;
}
export async function getDoctorByEmail(email) {
  const res = await pool.query('SELECT * from doctor WHERE email = $1;', [
    email,
  ]);
  return res.rows;
}
//add patient to doctor's list of patients
export async function addPatientToDoctorList(doctor_id, patient_id) {
  const res = await pool.query(
    'UPDATE doctor SET patients = array_append(patients, $1)WHERE doctor_id = $2 RETURNING*;',
    [patient_id, doctor_id]
  );
  return res.rows;
}
