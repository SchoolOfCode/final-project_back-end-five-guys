import pool from '../db/index.js';

export async function getSignUps() {
  const res = await pool.query('Select * from signup');
  return res.rows;
}
export async function getCode(email) {
  const res = await pool.query('Select code from signup where patient_id=$1', [
    email,
  ]);
  return res.rows;
}
export async function matchesSignUp(code) {
  const res = await pool.query('Select * from signup where code=$1', [code]);
  return res.rows;
}
export async function useSignUp(code) {
  const res = await pool.query(
    'update signup set used=true where code=$1 returning *',
    [code]
  );
  return res.rows;
}
export async function newSignUp(id, patient_id) {
  const res = await pool.query(
    'insert into signup (code,patient_email,used,patient_id) values ($1,$2,$3,$4) returning *',
    [id, '', false, patient_id]
  );
  return res.rows;
}

export async function linkSignUp(id) {
  const res = await pool.query(
    'select * from signup where code=$1 AND used=false',
    [id]
  );

  return res.rows;
  //Need to check if there is a valid result in checkRes, and if there was (ie: returns a row with the email='', then need to insert the email into the blank spot with a 2nd query)
  //Otherwise, need to give back an error.
}
