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
  for (let i = 0; i < allergies.length; i++) {
    let res = await pool.query(
      'insert into allergy (patient_id,name,reaction) values ($1,$2,$3) returning *',
      [allergies[i].patient_id, allergies[i].name, allergies[i].reaction]
    );
    console.log(res.rows);
  }
}

populateAllergies(allergies);
