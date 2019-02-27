SET NAMES utf8mb4;

CREATE TABLE `role` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `country` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `city` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `module` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`title` varchar(255) NOT NULL,
`created` DATETIME NOT NULL,
`updated` DATETIME NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `hobby` varchar(255) NOT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  `country_id` int(10) unsigned NOT NULL,
  `city_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_user_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_country` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user_module` (
`user_id` int(10) unsigned NOT NULL,
`module_id` int(10) unsigned NOT NULL,
PRIMARY KEY(`user_id`, `module_id`),
CONSTRAINT `fk_user_module_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_user_module_module` FOREIGN KEY (`module_id`) REFERENCES `module` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Roles
insert into role (id, title) values (1, 'student');
insert into role (id, title) values (2, 'mentor');

-- Countries
insert into role (id, title) values (1, 'Italy');
insert into role (id, title) values (2, 'Philippines');
insert into role (id, title) values (3, 'Iran');
insert into role (id, title) values (4, 'Vietnam');
insert into role (id, title) values (5, 'India');
insert into role (id, title) values (6, 'Ukraine');
insert into role (id, title) values (7, 'Portugal');
insert into role (id, title) values (8, 'Denmark');
insert into role (id, title) values (9, 'Cameroon');
insert into role (id, title) values (10, 'Pakistan');
insert into role (id, title) values (11, 'Algerie');
insert into role (id, title) values (12, 'Germany');

-- Cities 
insert into role (id, title) values (1, 'Trento');
insert into role (id, title) values (2, 'Manila');
insert into role (id, title) values (3, 'Tehran');
insert into role (id, title) values (4, 'Hanoi');
insert into role (id, title) values (5, 'New Delhi');
insert into role (id, title) values (6, 'Kiev');
insert into role (id, title) values (7, 'Lisbon');
insert into role (id, title) values (8, 'Copenhagen');
insert into role (id, title) values (9, 'Yaounde');
insert into role (id, title) values (10, 'Islamabad');
insert into role (id, title) values (11, 'Algiers');
insert into role (id, title) values (12, 'Berlin');

-- Modules
insert into role (id, title, created, updated) values (1, 'HTML/CSS', '2019-02-09 09:18:16', '2019-02-10 09:18:16');
insert into role (id, title, created, updated) values (1, 'Javascript', '2019-02-09 10:18:16', '2019-02-10 09:18:16');
insert into role (id, title, created, updated) values (1, 'NodeJS', '2019-02-09 09:45:16', '2019-02-10 09:18:16');
insert into role (id, title, created, updated) values (1, 'Database', '2019-02-09 14:01:04', '2019-02-10 09:18:16');
insert into role (id, title, created, updated) values (1, 'React', '2019-02-09 12:55:23', '2019-02-10 09:18:16'); 
-- Users
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (1,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (2,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (3,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (4,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (5,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (6,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (7,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (8,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (9,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (10,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (11,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (12,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (13,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (14,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (15,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (16,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (17,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (18,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (19,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (20,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (21,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (22,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (23,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );
insert into user (id, name, hobby, created, updated, role_id, country_id, city_id) values (24,'Badr Amine', 'football', '2019-02-09 02:20:13', '2019-02-10 09:18:16', 1, 1, 1 );