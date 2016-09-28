CREATE DATABASE creativewriter_db;
USE creativewriter_db;


CREATE TABLE teachers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	PRIMARY KEY (id)
	
);