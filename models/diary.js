import pool from "../db/index.js";

export async function getDiary() {
  const res = await pool.query("select * from diary");
  return res.rows;
}
export async function getDiaryById(id) {
  const res = await pool.query("select * from diary where patient_id=$1", [id]);
  return res.rows;
}
export async function getDiaryForDoctor() {
  const res = await pool.query('select * from diary where patient_id=$1', [id]);
  return res.rows;
}
export async function getDiaryByEmail(email) {
  const res = await pool.query(
    "select * from diary join patient on diary.patient_id=patient.patient_id where email=$1",
    [email]
  );
  return res.rows;
}

export async function newDiaryEntry(email, entry) {
  const response = await pool.query(
    "select patient_id from patient where email =$1;",
    [email]
  );
  const id = response.rows[0].patient_id;

  const res = await pool.query(
    "insert into diary (patient_id,date,mood,details) values ($1,$2,$3,$4) returning *;",
    [id, entry.date, entry.mood, entry.details]
  );

  return res.rows;
}
