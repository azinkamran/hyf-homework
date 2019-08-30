-- create database meal;
use meal;

CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `when` date NOT NULL,
  `max_reservations` int(10) unsigned NOT NULL,
  `proce`decimal not null,
  `created_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `number_of_guests` int(10) not null,
  `created_date` date NOT NULL,
  `meal_id` int(10) unsigned,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text not null,
  `meal_id` int(10) unsigned,
  `stars`int(10) NULL DEFAULT NULL,
  `created_date` date NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meal2` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;