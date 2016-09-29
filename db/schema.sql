CREATE DATABASE creativewriter_db;
USE creativewriter_db;


CREATE TABLE teachers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE students
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE class
(
	id int NOT NULL AUTO_INCREMENT,
	teacher_name varchar(255) NOT NULL,
	student_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE assignments
(
	id int NOT NULL AUTO_INCREMENT,
<<<<<<< HEAD
=======
	teacher_name varchar(255) NOT NULL,
	student_name varchar(255) NOT NULL,	
>>>>>>> edwin
	writing varchar(20000) NOT NULL,
	grade varchar(2) NOT NULL,
	PRIMARY KEY (id)
);