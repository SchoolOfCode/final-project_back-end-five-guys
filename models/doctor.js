import pool from "../db/index.js";

//gets all details for a certain doctor
export async function getDoctor(doctor_id) {
  const res = await pool.query(
    "SELECT * from doctor WHERE doctor_id = $1 RETURNING*;",
    [doctor_id]
  );
  return res.rows;
}

//add patient to doctor's list of patients
export async function addPatientToDoctorList(doctor_id, patient) {
  const res = await pool.query(
    "UPDATE doctor SET patients = array_append(patients, $1)WHERE doctor_id = $2 RETURNING*;",
    [patient, doctor_id]
  );
  return res.rows;
}
