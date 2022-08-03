import pool from "../db/index.js";

//gets all details for a certain patient
export async function getPatient(patient_id) {
  const res = await pool.query("SELECT * from patient WHERE patient_id = $1;", [
    patient_id,
  ]);
  return res.rows;
}

//create patient
export async function createPatient(patient) {
  const res = await pool.query(
    "INSERT INTO patient (firstName, surname, title, address, pregnant, dob, gender, gpSurgery, nhsNumber, phoneNumber, postcode, email, weight) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,);",
    [patient, doctor_id]
  );
}
