# Job Engine

## Description

Being an aspiring web developer seeking a job in the current market has been challenging especially when it comes to identifying an entry-level position. Job search engines host job openings by seniority level required for the posted job. However, when applying for jobs through these search engines, it seems like there are no standardized experience requirements based on the seniority level mentioned in the job posts.
Bearing this use case in mind, I came up with the idea of building a job hosting site that has different seniority levels to choose from based on the years of experience required by a candidate to qualify for a specific position advertised on this website.

A representative of a company can create an admin profile to post a job opening through this website. Once successfully published the job is then vsible to anyone looking of a job.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation

- To be able use exoeriment with the code base, please checkout main branch
- Run `npm i`
- Set the following .env file :
  - DB_NAME = company_db
  - DB_USER =
  - DB_PASSWORD =
  - SECRET =
- This project will be deployed in Heroku

## Usage

This project is build on React for the Frontend Application and MySql Database for data storage and persistence.

## Credits

- Credit goes to [Job Posting Template](https://recooty.com/blog/job-posting-template/) as a reference to the job posting form
-

---

## Badges

![badmath](https://shields.io/badge/react-blue?logo=react&style=for-the-badge)
![badmath](https://shields.io/badge/MySQL-lightgrey?logo=mysql&style=plastic&logoColor=white&labelColor=blue)

## Features

#### Employers

- This website standardize the seniority level based on required experience in `years`, that a candidate must have to qualify for specific job openings.
- User can create an `Employer` account and post about job openings in their company
- Posting a job will only be permitted to an authorized user
- A first time user will be asked to sign up to create an authorized account
- Once logged in, the user should see the Employer's dashboard, will all jobs.
- When a job is posted for the first time, the job status will be set as `inactive` by default.
- The User can later make changes to the job details or can make the job posting active
- Once a job is activated, the job will be shown on the `Homepage` , accessible by all users.

#### Job Seeker

- WIP

<!-- ## How to Contribute -->
