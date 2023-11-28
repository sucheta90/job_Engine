DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE company(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(100),
    password VARCHAR(50)
);

CREATE TABLE jobs(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(255),
    experience_required_min INT NOT NULL,
    experience_required_max INT NOT NULL,
    run_until INT NOT NULL,
    description TEXT,
    responsibility TEXT,
    salary_min FLOAT,
    salary_max FLOAT,
    job_location_city VARCHAR(50),
    job_location_state VARCHAR(50),
    job_type VARCHAR(50),
    company_id INT,
    FOREIGN KEY(company_id)
    REFERENCES company(id)
    ON DELETE SET NULL,
    application_received INT,
    job_status VARCHAR(30),
    skills_required SET
);

CREATE TABLE candidate(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(50)

)

CREATE TABLE skills(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    skill_name VARCHAR(100)
)