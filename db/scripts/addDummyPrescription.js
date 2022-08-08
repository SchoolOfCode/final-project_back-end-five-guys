import pool from "../index.js";

const dummyPrescriptionData = [
  {
    patient_id: 1,
    name: "simvastatin",
    reason: "lower cholesterol",
    total: 14,
    frequency: "twice a day",
    dosage: 2,
    date: "2022-08-04",
    active: true,
    measurement: "mg",
    monitoring: false,
    monitoringSchedule: 0,
    monitoringFrequency: "week",
    override: "",
    quantity: 300,
    status: "active",
    type: "repeat",
  },
  {
    patient_id: 1,
    name: "apixaban",
    reason: "prevent blood clots",
    total: 14,
    frequency: "twice a day",
    dosage: 2,
    date: "2022-08-04",
    active: true,
    measurement: "mg",
    monitoring: true,
    monitoringFrequency: "months",
    monitoringSchedule: 2,
    override: "",
    quantity: 100,
    status: "active",
    type: "acute",
  },
  {
    patient_id: 2,
    name: "apixaban",
    reason: "prevent blood clots",
    total: 2000,
    frequency: "once a day",
    dosage: 2,
    date: "2022-01-01",
    active: true,
    measurement: "mg",
    monitoring: true,
    monitoringFrequency: "week",
    monitoringSchedule: 4,
    override: "",
    quantity: 100,
    status: "paused",
    type: "acute",
  },
  {
    patient_id: 1,
    name: "ketoconazole",
    reason: "prevent blood clots",
    total: 2000,
    frequency: "once a day",
    dosage: 2,
    date: "2022-01-01",
    active: true,
    measurement: "mg",
    monitoring: true,
    monitoringFrequency: "week",
    monitoringSchedule: 4,
    override: "Need to lose weight",
    quantity: 100,
    status: "active",
    type: "acute",
  },
];

async function populatePresciption(items) {
  for (let i = 0; i < items.length; i++) {
    let res = await pool.query(
      "insert into prescription (patient_id,name,reason,total,frequency,dosage,date,type,measurement,monitoring,monitoringFrequency,monitoringSchedule,override,quantity,status) values($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning * ",
      [
        items[i].patient_id,
        items[i].name,
        items[i].reason,
        items[i].total,
        items[i].frequency,
        items[i].dosage,
        items[i].date,
        items[i].type,
        items[i].measurement,
        items[i].monitoring,
        items[i].monitoringFrequency,
        items[i].monitoringSchedule,
        items[i].override,
        items[i].quantity,
        items[i].status,
      ]
    );
    console.log(res.rows);
  }
}

populatePresciption(dummyPrescriptionData);
