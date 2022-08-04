import express from "express";
import { getDiary, getDiaryById, newDiaryEntry } from "../models/diary.js";
import {
  getAllergies,
  getAllergiesById,
  makeAllergy,
} from "../models/allergy.js";
import { getSignUps, newSignUp, linkSignUp } from "../models/signUp.js";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Home page not in use");
});

router.get("/diary", async function (req, res, next) {
  const response = await getDiary();
  res.json({ success: true, data: response });
});

//get all diary entries for a specific patient
router.get("/diary/:id", async function (req, res, next) {
  const response = await getDiaryById(Number(req.params.id));
  return res.json({ success: true, data: response });
});

// add diary entry for patient
router.post("/diary/:id", async function (req, res, next) {
  const response = await newDiaryEntry(Number(req.params.id), req.body);
  return res.json({ success: true, data: response });
});
export default router;
