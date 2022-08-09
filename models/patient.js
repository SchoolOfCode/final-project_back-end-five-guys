import pool from '../db/index.js';

//gets all details
export async function getPatients() {
  const res = await pool.query('SELECT * FROM patient;');
  return res.rows;
}

//gets all details for a certain patient by email
export async function getPatientsByDoctor(email) {
  const res = await pool.query(
    'SELECT * FROM patient WHERE patient_id = any (select unnest(patients) from doctor where email=$1);',
    [email]
  );
  console.log(res.rows);

  return res.rows;
}

export async function getPatientByEmail(email) {
  const res = await pool.query('SELECT * FROM patient WHERE email = $1;', [
    email,
  ]);
  console.log(res.rows);
  return res.rows;
}
export async function linkPatient(email, id) {
  const res2 = await pool.query(
    'update patient set email = $1 where patient_id=$2',
    [email, id]
  );
  const res = await pool.query(
    'update signup set patient_email = $1 where patient_id=$2',
    [email, id]
  );
  return { signup: res.rows, patient: res2.rows };
}

//gets all details for a certain patient by id
export async function getPatientById(patient_id) {
  const res = await pool.query('SELECT * FROM patient WHERE patient_id = $1;', [
    patient_id,
  ]);
  return res.rows;
}

//create patient
export async function createPatient(patient) {
  const res = await pool.query(
    'INSERT INTO patient (firstName, ethnicity, surname, title, address, pregnant, dob, gender, gpSurgery, nhsNumber, phoneNumber, postcode, email, weight) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING*;',
    [
      patient.firstName,
      patient.ethnicity,
      patient.surname,
      patient.title,
      patient.address,
      patient.pregnant,
      patient.dob,
      patient.gender,
      patient.gpSurgery,
      patient.nhsNumber,
      patient.phoneNumber,
      patient.postcode,
      patient.email,
      patient.weight,
    ]
  );
  return res.rows;
}

//update patient weight
export async function updatePatientWeight(patient, weight) {
  const res = await pool.query(
    'UPDATE patient SET weight = $1 WHERE patient_id = $2 RETURNING*;',
    [weight, patient]
  );

  return res.rows;
}

//update patient prepaid date
export async function updatePatientPrepaid(patient, prepaid) {
  const res = await pool.query(
    'UPDATE patient SET prepaid = $1 WHERE patient_id = $2 RETURNING*;',
    [prepaid, patient]
  );

  return res.rows;
}

//delete patient
export async function deletePatient(patient) {
  const res = await pool.query(
    'DELETE FROM patient WHERE patient_id = $1 RETURNING*;',
    [patient]
  );
  return res.rows;
}

//update patient details
export async function updatePatient(patient) {
  const res = await pool.query(
    'UPDATE patient SET firstName=$1, surname=$2, title=$3, address=$4, pregnant=$5, dob=$6, gender=$7, gpSurgery=$8, nhsNumber=$9, phoneNumber=$10, postcode=$11, email=$12, weight=$13 RETURNING*;',
    [
      patient.firstName,
      patient.surname,
      patient.title,
      patient.address,
      patient.pregnant,
      patient.dob,
      patient.gender,
      patient.gpSurgery,
      patient.nhsNumber,
      patient.phoneNumber,
      patient.postcode,
      patient.email,
      patient.weight,
    ]
  );
  return res.rows;
}
