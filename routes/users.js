import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {
  getDiary,
  getDiaryById,
  newDiaryEntry,
  getDiaryByEmail,
} from '../models/diary.js';
import {
  getAllergies,
  getAllergiesById,
  makeAllergy,
  getAllergiesByEmail,
} from '../models/allergy.js';
import {
  getSignUps,
  newSignUp,
  linkSignUp,
  matchesSignUp,
  useSignUp,
} from '../models/signUp.js';

import {
  createPatient,
  getPatientByEmail,
  getPatients,
  getPatientsByDoctor,
  linkPatient,
  updatePatientPrepaid,
} from '../models/patient.js';
import {
  getPrescriptionsByEmail,
  getPrescriptionsById,
  makePrescription,
} from '../models/prescription.js';
import {
  getDoctorByEmail,
  getDoctorById,
  addPatientToDoctorList,
} from '../models/doctor.js';
import { deletePending, getPending } from '../models/pending.js';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Home page not in use');
});

router.get('/diary/:id', async function (req, res, next) {
  if (req.params.id) {
    const response = await getDiaryById(Number(req.params.id));
    return res.json({ success: true, data: response });
  }
  const response = await getDiary();
  res.json({ success: true, data: response });
});

//get all diary entries for a specific patient
router.get('/diary/:email', async function (req, res, next) {
  const response = await getDiaryByEmail(req.params.email);
  return res.json({ success: true, data: response });
});

// add diary entry for patient
router.post('/diary/:email', async function (req, res, next) {
  const response = await newDiaryEntry(req.params.email, req.body);
  return res.json({ success: true, data: response });
});

//route to get allergies for patient by searching their email
router.get('/allergy/', async function (req, res, next) {
  if (req.query.email !== undefined) {
    const response = await getAllergiesByEmail(req.query.email);
    return res.json({ success: true, data: response });
  }
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

//add allergy for patient
router.post('/allergy/:email', async function (req, res, next) {
  const response = await makeAllergy(req.params.email, req.body);
  return res.json({ success: true, data: response });
});

router.get('/signup', async function (req, res, next) {
  if (req.query.code) {
    const response = await linkSignUp(req.query.code);
    return res.json({ success: true, data: response });
  }
  const response = await getSignUps();
  res.json({ success: true, data: response });
});
router.put('/signup', async function (req, res, next) {
  if (req.query.code) {
    const response = await useSignUp(req.query.code);
    return res.json({ success: true, data: response });
  }
  const response = await getSignUps();
  res.json({ success: true, data: response });
});
router.get('/doctor', async function (req, res, next) {
  if (req.query.email) {
    const response = await getDoctorByEmail(req.query.email);
    return res.json({ success: true, data: response });
  }

  res.json({ success: false, data: 'no email provided' });
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
router.put('/patients', async function (req, res, next) {
  if (req.query.id !== undefined && req.query.email !== undefined) {
    const response = await linkPatient(req.query.email, Number(req.query.id));
    return res.json({ success: true, data: response });
  }
  res.json({ success: false, data: 'not a valid ID' });
});

router.post('/patients', async function (req, res, next) {
  if (req.query.doctoremail) {
    console.log('email given for post for new patient');
    const newPatient = await createPatient(req.body);
    console.log('new pat', newPatient);
    let registerID = uuidv4().split('-')[0];
    const signUp = await newSignUp(registerID, newPatient[0].patient_id);
    console.log('sign up', signUp);
    const doctorID = await getDoctorByEmail(req.query.doctoremail);
    console.log(doctorID);
    const addedPatient = await addPatientToDoctorList(
      doctorID[0].doctor_id,
      newPatient[0].patient_id
    );
    return res.json({
      success: true,
      doc: addedPatient,
      patient: newPatient,
      registrationID: signUp,
    });
  }
  res.json({ success: false, data: {} });
});
router.get('/prescriptions/:id', async function (req, res, next) {
  const response = await getPrescriptionsById(Number(req.params.id));
  res.json({ success: true, data: response });
});
router.get('/prescriptions', async function (req, res, next) {
  if (req.query.email) {
    const response = await getPrescriptionsByEmail(req.query.email);
    console.log('getting pres', response);
    return res.json({ success: true, data: response });
  }
  res.json({ success: false, data: {} });
});
router.post('/prescriptions/:id', async function (req, res, next) {
  console.log('posting prescription', req.body);
  const response = await makePrescription(Number(req.params.id), req.body);
  res.json({ success: true, data: response });
});

router.get('/patient', async function (req, res, next) {
  if (req.query.email) {
    const response = await getPatientByEmail(req.query.email);
    return res.json({ success: true, data: response });
  }
  res.json({ success: false, data: 'invalid input somehow' });
});

router.patch('/patient/:email', async function (req, res, next) {
  const response = await updatePatientPrepaid(req.params.email, req.body);
  return res.json({ success: true, data: response });
});

//routes for pending prescriptions
router.get('/pending', async function (req, res, next) {
  const response = await getPending();
  res.json({ success: true, data: response });
});

router.delete('/pending/:id', async function (req, res, next) {
  const response = await deletePending(Number(req.params.id));
  res.json({ success: true, data: response });
});
export default router;
