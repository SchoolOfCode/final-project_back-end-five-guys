import pool from '../db/index.js';

export async function getSignUps() {
  const res = await pool.query('Select * from signup');
  return res.rows;
}

export async function newSignUp(id, patient_id) {
  const res = await pool.query(
    'insert into signup (code,patient_email,used,patient_id) values ($1,$2,$3,$4) returning *',
    [id, '', false, patient_id]
  );
  return res.rows;
}

export async function linkSignUp(email, id) {
  const checkRes = await pool.query(
    'select * from signup where code=$1 AND used=false',
    [id]
  );
  console.log('checkRes:', checkRes);
  //Need to check if there is a valid result in checkRes, and if there was (ie: returns a row with the email='', then need to insert the email into the blank spot with a 2nd query)
  //Otherwise, need to give back an error.
}
