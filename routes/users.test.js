import request from 'supertest';
import app from '../app';
import { test, expect } from '@jest/globals';

test.only(`if get request is sent to /patients, all patients should be returned`, async () => {
  const response = await request(app).get('/patients');

  const expectedData = {
    firstname: expect.any(String),
    surname: expect.any(String),
    title: expect.any(String),
    address: expect.any(String),
    pregnant: expect.any(Boolean),
    dob: expect.any(String),
    gender: expect.any(String),
    gpsurgery: expect.any(String),
    nhsnumber: expect.any(String),
    phonenumber: expect.any(String),
    postcode: expect.any(String),
    email: expect.any(String),
    prepaid: expect.any(String),
    weight: expect.any(String),
    ethnicity: expect.any(String),
    patient_id: expect.any(Number),
  };

  const expectedBody = {
    success: true,
    data: expect.arrayContaining([expectedData]),
  };
  expect(response.statusCode).toBe(200);
  expect(response.headers['content-type']).toMatch(/json/);
  expect(response.body).toMatchObject(expectedBody);
});
