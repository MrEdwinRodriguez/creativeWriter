CREATE DATABASE creativewriter_db;
USE creativewriter_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	email varchar (50) NOT NULL,
	type varchar (10) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE submission
(
	id int NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	user_input(20000) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE comments
(
	id int NOT NULL AUTO_INCREMENT,
	submission_id INT  NOT NULL,
	comments varchar (10000)
	PRIMARY KEY (id)
);
