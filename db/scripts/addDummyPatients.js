import pool from '../index.js';

const dummyPatientData = [
  {
    firstName: 'Roger',
    surname: 'Smith',
    title: 'Mr',
    address: '122 Street Road Birmingham',
    pregnant: false,
    dob: '19880201',
    gender: 'Male',
    gpSurgery: 'Happy Health',
    nhsNumber: 123456789,
    phoneNumber: '01213457854',
    postcode: 'B91 7QY',
    email: 'rsmith123@email.com',
    prepaid: '2022-09-01',
    weight: 100,
    ethnicity: 'Irish',
  },
  {
    firstName: 'Victoria',
    surname: 'Smith',
    title: 'Mrs',
    address: '122 Street Road Birmingham',
    pregnant: false,
    dob: '19880601',
    gender: 'Female',
    gpSurgery: 'Happy Health',
    nhsNumber: 164928174,
    phoneNumber: '01213457854',
    postcode: 'B91 7QY',
    email: 'vickismith@email.com',
    prepaid: '2022-09-01',
    weight: 150,
    ethnicity: 'Romanian',
  },
  {
    firstName: 'Katie',
    surname: 'Lefoe',
    title: 'Miss',
    address: '1 Close Birmingham',
    pregnant: true,
    dob: '19900502',
    gender: 'Female',
    gpSurgery: 'Happy Health',
    nhsNumber: 892758490,
    phoneNumber: '01216783217',
    postcode: 'B21 9UI',
    email: 'katielefoe@email.com',
    prepaid: '2022-07-01',
    weight: 50,
    ethnicity: 'white',
  },
];

async function populatePatient(patients) {
  for (let i = 0; i < patients.length; i++) {
    let res = await pool.query(
      'insert into patient (firstname, ethnicity, surname,title,email, address, pregnant,dob,gender,gpsurgery,nhsnumber,phonenumber,postcode,prepaid,weight) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) returning *',
      [
        patients[i].firstName,
        patients[i].ethnicity,
        patients[i].surname,
        patients[i].title,
        patients[i].email,
        patients[i].address,
        patients[i].pregnant,
        patients[i].dob,
        patients[i].gender,
        patients[i].gpSurgery,
        patients[i].nhsNumber,
        patients[i].phoneNumber,
        patients[i].postcode,
        patients[i].prepaid,
        patients[i].weight,
      ]
    );
    console.log(res.rows);
  }
}

populatePatient(dummyPatientData);
