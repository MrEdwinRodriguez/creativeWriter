CREATE DATABASE creativewriter_db;
USE creativewriter_db;


CREATE TABLE Mentors
(
	id int NOT NULL AUTO_INCREMENT,
	name int NOT NULL,
	email varchar(50) NOT NULL,
	password varchar (20) NOT NULL,
	submission varchar (300) NOT NULL,
	Users_user_type varchar(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	user_type varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE students
(
	id int NOT NULL AUTO_INCREMENT,
	name int NOT NULL,
	email varchar(255) NOT NULL,
	submission (300)NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE assignments
(
	id int NOT NULL AUTO_INCREMENT,
	writing varchar(20000) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE assignments_has_Submission
(
	id int NOT NULL AUTO_INCREMENT,
	assignments_Topics varchar(200) NOT NULL,
	Submission_student_submission INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE submission
(
	id int NOT NULL AUTO_INCREMENT,
	student_input(20000) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Submission_has_student
(
	id int NOT NULL AUTO_INCREMENT,
	Submission_student_submission varchar(20000) NOT NULL,
	students_students_id INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE comments
(
	id int NOT NULL AUTO_INCREMENT,
	mentor_id INT NOT NULL,
	submission_id INT  NOT NULL,
	mentor_input varchar (1000),
	student_input varchar (1000)
	PRIMARY KEY (id)
);

CREATE TABLE comments_has_submission
(
	id int NOT NULL AUTO_INCREMENT,
	writing varchar(20000) NOT NULL,
	grade varchar(2) NOT NULL,
	PRIMARY KEY (id)
);
