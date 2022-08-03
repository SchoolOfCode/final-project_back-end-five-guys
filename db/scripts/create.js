import pool from '../index.js';

await pool.query(
  'Create table if not exists diary (diary_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, patient_id INT, date TEXT, mood INT, details TEXT); '
);
