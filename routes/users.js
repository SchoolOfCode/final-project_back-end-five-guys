import express from 'express';
import { getDiary, getDiaryById, newDiaryEntry } from '../models/diary.js';
import {
  getAllergies,
  getAllergiesById,
  makeAllergy,
} from '../models/allergy.js';
import { getSignUps, newSignUp, linkSignUp } from '../models/signUp.js';
import {
  createPatient,
  getPatients,
  getPatientsByDoctor,
} from '../models/patient.js';
import { getPrescriptionsById } from '../models/prescription.js';
import {
  getDoctorByEmail,
  getDoctorById,
  addPatientToDoctorList,
} from '../models/doctor.js';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Home page not in use');
});

router.get('/diary', async function (req, res, next) {
  const response = await getDiary();
  res.json({ success: true, data: response });
});

//get all diary entries for a specific patient
router.get('/diary/:id', async function (req, res, next) {
  const response = await getDiaryById(Number(req.params.id));
  return res.json({ success: true, data: response });
});

// add diary entry for patient
router.post('/diary/:id', async function (req, res, next) {
  const response = await newDiaryEntry(Number(req.params.id), req.body);
  return res.json({ success: true, data: response });
});
router.get('/allergy/:id', async function (req, res, next) {
  if (req.params.id) {
    console.log('id given for allergies');
    const response = await getAllergiesById(Number(req.params.id));
    return res.json({ success: true, data: response });
  }
  const response = await getAllergies();
  res.json({ success: true, data: response });
});
router.get('/signup', async function (req, res, next) {
  const response = await getSignUps();
  res.json({ success: true, data: response });
});
router.get('/patients', async function (req, res, next) {
  if (req.query.doctoremail !== undefined) {
    console.log('doc email provided');
    const response = await getPatientsByDoctor(req.query.doctoremail);
    return res.json({ success: true, data: response });
  }
  const response = await getPatients();
  res.json({ success: true, data: response });
});
router.post('/patients', async function (req, res, next) {
  if (req.query.doctoremail) {
    console.log('email given for post for new patient');
    const newPatient = await createPatient(req.body);
    console.log(newPatient);
    const doctorID = await getDoctorByEmail(req.query.doctoremail);
    console.log(doctorID);
    const addedPatient = await addPatientToDoctorList(
      doctorID[0].doctor_id,
      newPatient[0].patient_id
    );
    return res.json({ success: true, data: addedPatient });
  }
  res.json({ success: false, data: {} });
});
router.get('/prescriptions/:id', async function (req, res, next) {
  const response = await getPrescriptionsById(Number(req.params.id));
  res.json({ success: true, data: response });
});
export default router;
