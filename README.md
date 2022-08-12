![Logo](./medi-check.png)
<img src="./medi-check.png" width='200'/>
# SOC MEDI-CHECK APP BACK-END

## Intro

---

This is the back end for our final month project app called "Medi-Check". Hospital admissions via prescription errors are unfortunatley a common occurence due to medical interactions being uncaught.

For the front end repo please click [here](https://github.com/SchoolOfCode/final-project_front-end-five-guys):

## Overview

---

Our app Medi-Check aims to reduce this by giving autonomy back to the doctor when prescribing medications as our app will check accordingly with patients other meds if the is an interaction and will highlight high severity interactions via an alert.

It also allows the patient to view their medical history in one location and even allows the patient to enter "OTC" (over the counter) medications to check against their current meds to see if their is a high severity interaction.

## Back End Tech Stack

---

- Express Generator
- Heroku Database
- Jest
- Node.js
- PostgreSQL
- Supertest
- Various npm libraries

## Installation

---

In the terminal please type in the following code snippets one by one:

```bash
  git clone https://github.com/SchoolOfCode/final-project_back-end-five-guys.git

  cd https://github.com/SchoolOfCode/final-project_back-end-five-guys

  npm i
```

## Environment Variables

---

To run this project, you will need to add a .env file to the root level with the following environment variable:

`DATABASE_URL`

The above is the database URI on Heroku (which you will need to set up) that contains all the information regarding port number, database number etc. in one string - this long string needs to be stored in the DATABASE_URL variable in your .env file.

## Database Setup

---

To initialise and populate the database, run the following command:

```bash
  npm run create
```

To delete the tables write the table that you want to delete in the delete.js scripts file and then run the following command:

```bash
  npm run delete
```

## Paths

---

Please see the routes/users.js file to see specific routes and their respective functionalities which are imported from the models/ folders.

## Running Tests

---

To run tests, run the following command:

```bash
  npm run test
```

## Authors

---

- Ben Greenwood [GitHub](https://github.com/B-P-Greenwood) / FILL THIS IN [LinkedIn]() \*\*
- \*Brycen Barron-Borden [GitHub](https://github.com/brycenbb) / [LinkedIn](https://www.linkedin.com/in/brycenbb/)
- \*Rajesh Reel [GitHub](https://www.github.com/rajesh-reel) / [LinkedIn](https://www.linkedin.com/in/rajesh-reel/)
- \*Mike Rushton [GitHub](https://github.com/michaelrushton-dev) / [LinkedIn](https://www.linkedin.com/in/michael-rushton)
- \*Tom Birbeck [GitHub](https://github.com/TomBirbeck) / [LinkedIn](https://www.linkedin.com/in/tom-birbeck)
