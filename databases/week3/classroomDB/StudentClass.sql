SET NAMES utf8mb4;

CREATE TABLE  `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL,
  `ends` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_studentClass` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Classes
insert into class(id,name, begins, ends) values (1,'Programming Languages',NOW() ,NOW()+INTERVAL 3 YEAR);
insert into class(id,name, begins, ends) values (2,'Electronic',NOW()+INTERVAL 2 HOUR,NOW()+INTERVAL 3 YEAR);
insert into class(id,name, begins, ends) values (3,'Mathematic',NOW()+INTERVAL 30 MINUTE,NOW()+INTERVAL 5 YEAR);
insert into class(id,name, begins, ends) values (4,'Science',NOW(),NOW()+INTERVAL 5 YEAR);
insert into class(id,name, begins, ends) values (5,'Physics', NOW(),NOW()+INTERVAL 5 YEAR);

-- Students
insert into student(id, name, email, phone, class_id) values (1,'Badr','badramine17@gmail.com','123456789',1);
insert into student(id, name, email, phone, class_id) values (2,'Marta','marta@gmail.com','1234564566',5);
insert into student(id, name, email, phone, class_id) values (3,'Paul','paul@gmail.com','123456906',3);
insert into student(id, name, email, phone, class_id) values (4,'Lucas','lucas@gmail.com','123381789',2);
insert into student(id, name, email, phone, class_id) values (5,'Mohammed','mohammed@gmail.com','167956789',4);