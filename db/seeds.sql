use creativewriter_db;

INSERT INTO teachers (name,email),
VALUES ('Ms. Parker','Hey_Ms_Parker@hotmail.com');
VALUES ('Ms. Jackson','Sorry_Ms_Jackson@hotmail.com');
VALUES ('Mr. Peter' , 'PeteyPablo@UCF.com')


INSERT INTO students(name,email),
VALUES ('Edwin Rodriguez','MrPimp@hotmail.com');
VALUES ('Jason Perry','DaTruth@gmail.com');
VALUES ('Josh Miller','Slapmamas@aol.com');


INSERT INTO class (teacher_id, student_id, name)

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
