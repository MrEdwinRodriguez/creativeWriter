use creativewriter_db;

INSERT INTO Mentors (name,email),
VALUES ('Ms. Parker','Hey_Ms_Parker@hotmail.com');
VALUES ('Ms. Jackson','Sorry_Ms_Jackson@hotmail.com');
VALUES ('Mr. Peter' , 'PeteyPablo@UCF.com')

INSERT INTO users (teacher_id, student_id, name),
VALUES ('Edwin Rodriguez','MrPimp@hotmail.com');
VALUES ('Jason Perry','DaTruth@gmail.com');
VALUES ('Josh Miller','Slapmamas@aol.com');

INSERT INTO students (name,email,submission),
VALUES ('Edwin Rodriguez','MrPimp@hotmail.com');
VALUES ('Jason Perry','DaTruth@gmail.com');
VALUES ('Josh Miller','Slapmamas@aol.com');

INSERT INTO assignments (name,category,random,timer,complexity,description),
VALUES ('assign# 1','Eco-friendly','_','10:00 mins', student writing);
VALUES ('assign# 2','Social Network','_','10:00 mins', student writing);
VALUES ('assign# 3','Geography','_', '10:00 mins', student writing);
 -- 1- Category - Write about going green or an environmental concern you have.
 -- 2- Category - Visit your favorite Social Networking website (ie: Facebook, Pinterest, Google, Twitter, etc.) and write a about a post you see there.
 -- 3- Category - Pick a state or country you’ve never visited. Write about why you would or would not like to visit that place.

 INSERT INTO assignments_has_Submission (assignments_Topics INT, Submission_student_submission INT),
 VALUES ('Edwin Rodriguez','MrPimp@hotmail.com');
 VALUES ('Jason Perry','DaTruth@gmail.com');
 VALUES ('Josh Miller','Slapmamas@aol.com');

 INSERT INTO submission (student_input),
 VALUES (student_info);
 VALUES (student_info);
 VALUES (student_info);

 INSERT INTO Submission_has_student (Submission_student_submission INT, students_students_id INT),
 VALUES ('Edwin Rodriguez','MrPimp@hotmail.com');
 VALUES ('Jason Perry','DaTruth@gmail.com');
 VALUES ('Josh Miller','Slapmamas@aol.com');

 INSERT INTO comments (mentor_id,submission_id,mentor_input,student_input,date/time),
 VALUES ('Edwin Rodriguez','MrPimp@hotmail.com');
 VALUES ('Jason Perry','DaTruth@gmail.com');
 VALUES ('Josh Miller','Slapmamas@aol.com');

 INSERT INTO comments_has_submission (comments_mentor_comment INT, Submission_student_submission INT),
 VALUES ('Edwin Rodriguez','MrPimp@hotmail.com');
 VALUES ('Jason Perry','DaTruth@gmail.com');
 VALUES ('Josh Miller','Slapmamas@aol.com');

VALUES
(1,1,'Writing 101'),
(1,2,'Writing 101'),
(2,3,'Writing 102');


-- select * from class;
--
-- SELECT teachers.name, teachers.email
-- FROM teachers
-- INNER JOIN class
-- WHERE teachers.id = class.teacher_id;
--
-- SELECT teachers.name;
-- FROM class
-- INNER JOIN teachers
-- ON class.teacher_id=teachers.teachers_id;


-- delete from teachers where id = 4;
