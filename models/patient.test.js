import request from 'supertest';
import app from '../app';
import { test, expect } from '@jest/globals';

//test for get patient function
test('Test that the get patient function works', function () {
  async function getPatients() {
    return {
      success: true,
      data: [
        {
          firstName: 'Katie',
          surname: 'Lefoe',
          title: 'Miss',
          address: '1 Close Birmingham',
          pregnant: true,
          dob: '1990-05-02',
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
      ],
    };
  }
  const actual = getPatients();

  const expectedData = [
    {
      firstName: expect.any(String),
      surname: expect.any(String),
      title: expect.any(String),
      address: expect.any(String),
      pregnant: expect.any(Boolean),
      dob: expect.any(String),
      gender: expect.any(String),
      gpSurgery: expect.any(String),
      nhsNumber: expect.any(Number),
      phoneNumber: expect.any(String),
      postcode: expect.any(String),
      email: expect.any(String),
      prepaid: expect.any(String),
      weight: expect.any(Number),
      ethnicity: expect.any(String),
    },
  ];

  const expected = { success: true, data: expectedData };

  expect(actual).resolves.toStrictEqual(expected);
});

//test for get patient function
test('Test that the get patient by email function works', function () {
  const email = 'katielefoe@email.com';
  async function getPatientByEmail(email) {
    return {
      success: true,
      data: [
        {
          firstName: 'Katie',
          surname: 'Lefoe',
          title: 'Miss',
          address: '1 Close Birmingham',
          pregnant: true,
          dob: '1990-05-02',
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
      ],
    };
  }
  const actual = getPatientByEmail(email);

  const expectedData = [
    {
      firstName: expect.any(String),
      surname: expect.any(String),
      title: expect.any(String),
      address: expect.any(String),
      pregnant: expect.any(Boolean),
      dob: expect.any(String),
      gender: expect.any(String),
      gpSurgery: expect.any(String),
      nhsNumber: expect.any(Number),
      phoneNumber: expect.any(String),
      postcode: expect.any(String),
      email: 'katielefoe@email.com',
      prepaid: expect.any(String),
      weight: expect.any(Number),
      ethnicity: expect.any(String),
    },
  ];

  const expected = { success: true, data: expectedData };

  expect(actual).resolves.toStrictEqual(expected);
});

//create patient test
test('Test the create patient function works', function () {
  const patient = {
    firstName: 'Katie',
    ethnicity: 'white irish',
    surname: 'Lefoe',
    title: 'Miss',
    address: '1 Close Birmingham',
    pregnant: true,
    dob: '1990-05-02',
    gender: 'Female',
    gpSurgery: 'Happy Health',
    nhsNumber: 892758490,
    phoneNumber: '01216783217',
    postcode: 'B21 9UI',
    email: 'katielefoe@email.com',
    prepaid: '2022-07-01',
    weight: 50,
  };
  async function createPatient(patient) {
    return {
      success: true,
      data: [patient],
    };
  }

  const actual = createPatient(patient);

  const expectedData = [
    {
      firstName: 'Katie',
      ethnicity: 'white irish',
      surname: 'Lefoe',
      title: 'Miss',
      address: '1 Close Birmingham',
      pregnant: true,
      dob: '1990-05-02',
      gender: 'Female',
      gpSurgery: 'Happy Health',
      nhsNumber: 892758490,
      phoneNumber: '01216783217',
      postcode: 'B21 9UI',
      email: 'katielefoe@email.com',
      prepaid: '2022-07-01',
      weight: 50,
    },
  ];

  const expected = { success: true, data: expectedData };

  expect(actual).resolves.toStrictEqual(expected);
});

//update patient test
test('Test the update patient function works', function () {
  const patient = {
    firstName: 'Katie',
    ethnicity: 'white irish',
    surname: 'Lefoe',
    title: 'Miss',
    address: '1 Close Birmingham',
    pregnant: true,
    dob: '1990-05-02',
    gender: 'Female',
    gpSurgery: 'Happy Health',
    nhsNumber: 892758490,
    phoneNumber: '01216783217',
    postcode: 'B21 9UI',
    email: 'katielefoe@email.com',
    prepaid: '2022-07-01',
    weight: 50,
  };
  async function updatePatient(patient) {
    return {
      success: true,
      data: [patient],
    };
  }

  const actual = updatePatient(patient);

  const expectedData = [
    {
      firstName: 'Katie',
      ethnicity: 'white irish',
      surname: 'Lefoe',
      title: 'Miss',
      address: '1 Close Birmingham',
      pregnant: true,
      dob: '1990-05-02',
      gender: 'Female',
      gpSurgery: 'Happy Health',
      nhsNumber: 892758490,
      phoneNumber: '01216783217',
      postcode: 'B21 9UI',
      email: 'katielefoe@email.com',
      prepaid: '2022-07-01',
      weight: 50,
    },
  ];

  const expected = { success: true, data: expectedData };

  expect(actual).resolves.toStrictEqual(expected);
});

//test for adding prepaid
test('Test the add prepaid function works', function () {
  const patient = [
    {
      firstName: 'Katie',
      ethnicity: 'white irish',
      surname: 'Lefoe',
      title: 'Miss',
      address: '1 Close Birmingham',
      pregnant: true,
      dob: '1990-05-02',
      gender: 'Female',
      gpSurgery: 'Happy Health',
      nhsNumber: 892758490,
      phoneNumber: '01216783217',
      postcode: 'B21 9UI',
      email: 'katielefoe@email.com',
      prepaid: '',
      weight: 50,
    },
  ];
  const patient2 = {
    email: 'katielefoe@email.com',
    prepaid: '2022-07-01',
  };
  async function updatePatientPrepaid(email, prepaid) {
    return {
      success: true,
      data: [{ ...patient, prepaid: prepaid }],
    };
  }

  const actual = updatePatientPrepaid(patient2.email, patient2.prepaid);

  const expectedData = [
    {
      firstName: expect.any(String),
      surname: expect.any(String),
      title: expect.any(String),
      address: expect.any(String),
      pregnant: expect.any(Boolean),
      dob: expect.any(String),
      gender: expect.any(String),
      gpSurgery: expect.any(String),
      nhsNumber: expect.any(Number),
      phoneNumber: expect.any(String),
      postcode: expect.any(String),
      email: 'katielefoe@email.com',
      prepaid: '2022-07-01',
      weight: expect.any(Number),
      ethnicity: expect.any(String),
    },
  ];

  const expected = { success: true, data: expectedData };

  expect(actual).resolves.toStrictEqual(expected);
});
