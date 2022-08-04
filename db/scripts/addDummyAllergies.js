import pool from '../index.js';
let allergies = [
  {
    patient_id: 1,
    name: 'Bees',
    reaction: 'anaphylaxis',
  },
  {
    patient_id: 1,
    name: 'Peanuts',
    reaction: 'breathlessness',
  },
  {
    patient_id: 2,
    name: 'pollen',
    reaction: 'sneezing',
  },
  {
    patient_id: 3,
    name: 'animal fur',
    reaction: 'losing consciousness',
  },
];

async function populateAllergies(allergies) {
  for (let i = 0; i < patients.length; i++) {
    let res = await pool.query('insert into patient (first returning *', [
      patients[i].firstName,
      patients[i].surname,
      patients[i].title,
    ]);
    console.log(res.rows);
  }
}

populateAllergies(allergies);
