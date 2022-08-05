import pool from "../db/index.js";

export async function getAllergies() {
  const res = await pool.query("select * from allergy");
  return res.rows;
}

export async function getAllergiesById(id) {
  const res = await pool.query("select * from allergy where patient_id=$1", [
    id,
  ]);
  return res.rows;
}

export async function getAllergiesByEmail(email) {
  const res = await pool.query(
    "select * from allergy join patient on allergy.patient_id=patient.patient_id where email=$1",
    [email]
  );
  return res.rows;
}

export async function makeAllergy(email, entry) {
  const response = await pool.query(
    "select patient_id from patient where email =$1;",
    [email]
  );
  const id = response.rows[0].patient_id;

  const res = await pool.query(
    "insert into allergy (patient_id,name,reaction) values ($1,$2,$3) returning *;",
    [id, entry.name, entry.reaction]
  );
  return res.rows;
}
