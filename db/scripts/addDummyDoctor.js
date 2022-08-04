import pool from '../index.js';
let doctor = {
  patients: [1, 2, 3],
  name: 'Ben Snuggles',
  email: 'bens@gmail.com',
  gpSurgey: 'Happy Health',
};

async function populateDoctor(doctor) {
  const res = await pool.query(
    'insert into doctor (patients,name,email,gpSurgery) values ($1,$2,$3,$4) returning *',
    [doctor.patients, doctor.name, doctor.email, doctor.gpSurgey]
  );
  console.log(res.rows);
}

populateDoctor();
