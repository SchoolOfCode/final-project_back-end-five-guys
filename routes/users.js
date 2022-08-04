import express from 'express';
import { getDiary, getDiaryById, newDiaryEntry } from '../models/diary.js';
import {
  getAllergies,
  getAllergiesById,
  makeAllergy,
} from '../models/allergy.js';
import { getSignUps, newSignUp, linkSignUp } from '../models/signUp.js';
import { getPatients } from '../models/patient.js';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Home page not in use');
});

router.get('/diary', async function (req, res, next) {
  const response = await getDiary();
  res.json({ success: true, data: response });
});
router.get('/allergy', async function (req, res, next) {
  const response = await getAllergies();
  res.json({ success: true, data: response });
});
router.get('/signup', async function (req, res, next) {
  const response = await getSignUps();
  res.json({ success: true, data: response });
});
router.get('/patients', async function (req, res, next) {
  const response = await getPatients();
  res.json({ success: true, data: response });
});

export default router;
