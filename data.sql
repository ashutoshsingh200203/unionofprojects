-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: unionoftasks
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `aten_id` int NOT NULL AUTO_INCREMENT,
  `id` int DEFAULT NULL,
  `dop` date DEFAULT NULL,
  `stud_status` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`aten_id`),
  KEY `id` (`id`),
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`id`) REFERENCES `student_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22601 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `basic_details`
--

DROP TABLE IF EXISTS `basic_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basic_details` (
  `emp_id` int NOT NULL,
  `fname` varchar(15) NOT NULL,
  `lname` varchar(15) NOT NULL,
  `designation` varchar(45) NOT NULL,
  `email` varchar(145) NOT NULL,
  `phone_number` bigint NOT NULL,
  `address_1` varchar(245) NOT NULL,
  `address_2` varchar(245) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zipcode` bigint NOT NULL,
  `gender` varchar(6) NOT NULL,
  `relationship` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `basic_details2`
--

DROP TABLE IF EXISTS `basic_details2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basic_details2` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `designation` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `address_1` varchar(145) DEFAULT NULL,
  `address_2` varchar(145) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zipcode` int DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `relationship` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `basic_details_2`
--

DROP TABLE IF EXISTS `basic_details_2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basic_details_2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `designation` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `address_1` varchar(145) DEFAULT NULL,
  `address_2` varchar(145) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL,
  `city` varchar(255) NOT NULL,
  `state_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `edu`
--

DROP TABLE IF EXISTS `edu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `edu` (
  `id` int NOT NULL,
  `emp_id` int NOT NULL,
  `eid` int NOT NULL,
  `course` varchar(45) DEFAULT NULL,
  `university_or_school` varchar(45) DEFAULT NULL,
  `pass_year` int DEFAULT NULL,
  `percentage` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eid` (`eid`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `edu_ibfk_1` FOREIGN KEY (`eid`) REFERENCES `options_master` (`id`),
  CONSTRAINT `edu_ibfk_2` FOREIGN KEY (`emp_id`) REFERENCES `basic_details` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `edu2`
--

DROP TABLE IF EXISTS `edu2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `edu2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empid` int DEFAULT NULL,
  `education` varchar(45) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `percentage` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `empid` (`empid`),
  CONSTRAINT `edu2_ibfk_1` FOREIGN KEY (`empid`) REFERENCES `basic_details` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `exammaster`
--

DROP TABLE IF EXISTS `exammaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exammaster` (
  `examid` int NOT NULL,
  `exam_name` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`examid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int DEFAULT NULL,
  `compname` varchar(45) DEFAULT NULL,
  `designation` varchar(45) NOT NULL,
  `from_` date NOT NULL,
  `to_` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `basic_details` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `experience2`
--

DROP TABLE IF EXISTS `experience2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int DEFAULT NULL,
  `compname` varchar(45) DEFAULT NULL,
  `designation` varchar(45) DEFAULT NULL,
  `from_` date DEFAULT NULL,
  `to_` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `experience2_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `basic_details2` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `form_data`
--

DROP TABLE IF EXISTS `form_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `form_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `phone` bigint DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `id` int NOT NULL,
  `lan_id` int DEFAULT NULL,
  `emp_id` int DEFAULT NULL,
  `read_` tinyint(1) DEFAULT NULL,
  `write_` tinyint(1) DEFAULT NULL,
  `speak_` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `lan_id` (`lan_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `languages_ibfk_1` FOREIGN KEY (`lan_id`) REFERENCES `options_master` (`id`),
  CONSTRAINT `languages_ibfk_2` FOREIGN KEY (`emp_id`) REFERENCES `basic_details` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `languages2`
--

DROP TABLE IF EXISTS `languages2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empid` int DEFAULT NULL,
  `lang` varchar(45) DEFAULT NULL,
  `speak_` tinyint(1) DEFAULT NULL,
  `read_` tinyint(1) DEFAULT NULL,
  `write_` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `empid` (`empid`),
  CONSTRAINT `languages2_ibfk_1` FOREIGN KEY (`empid`) REFERENCES `basic_details2` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `option_master`
--

DROP TABLE IF EXISTS `option_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_master` (
  `option_id` int NOT NULL AUTO_INCREMENT,
  `s_id` int DEFAULT NULL,
  `option_name` varchar(45) DEFAULT NULL,
  `key_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`option_id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `options_master`
--

DROP TABLE IF EXISTS `options_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `options_master` (
  `id` int NOT NULL,
  `sid` int NOT NULL,
  `option_key` varchar(45) NOT NULL,
  `option_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sid` (`sid`),
  CONSTRAINT `options_master_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `selectmaster` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `preferences`
--

DROP TABLE IF EXISTS `preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preferences` (
  `emp_id` int NOT NULL,
  `location` varchar(45) NOT NULL,
  `noticeperiod` float NOT NULL,
  `ectc` float NOT NULL,
  `cctc` float NOT NULL,
  `department` varchar(45) NOT NULL,
  PRIMARY KEY (`emp_id`),
  CONSTRAINT `preferences_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `basic_details` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `preferences2`
--

DROP TABLE IF EXISTS `preferences2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preferences2` (
  `empid` int NOT NULL,
  `location` varchar(45) DEFAULT NULL,
  `noticeperiod` float DEFAULT NULL,
  `ectc` float DEFAULT NULL,
  `cctc` float DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`empid`),
  CONSTRAINT `preferences2_ibfk_1` FOREIGN KEY (`empid`) REFERENCES `basic_details2` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `references2`
--

DROP TABLE IF EXISTS `references2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `references2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int DEFAULT NULL,
  `name_` varchar(45) DEFAULT NULL,
  `contact` bigint DEFAULT NULL,
  `relation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `references2_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `basic_details2` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `references_`
--

DROP TABLE IF EXISTS `references_`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `references_` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int DEFAULT NULL,
  `name_` varchar(45) NOT NULL,
  `contact` bigint NOT NULL,
  `relation` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `references__ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `basic_details` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result` (
  `resultid` int NOT NULL AUTO_INCREMENT,
  `studid` int DEFAULT NULL,
  `eid` int DEFAULT NULL,
  `subid` int DEFAULT NULL,
  `pmarks` int DEFAULT NULL,
  `total_pmarks` int DEFAULT NULL,
  `tmarks` int DEFAULT NULL,
  `total_tmarks` int DEFAULT NULL,
  PRIMARY KEY (`resultid`),
  KEY `studid` (`studid`),
  KEY `eid` (`eid`),
  KEY `subid` (`subid`),
  CONSTRAINT `result_ibfk_1` FOREIGN KEY (`studid`) REFERENCES `student_master` (`id`),
  CONSTRAINT `result_ibfk_2` FOREIGN KEY (`eid`) REFERENCES `exammaster` (`examid`),
  CONSTRAINT `result_ibfk_3` FOREIGN KEY (`subid`) REFERENCES `subjectmaster` (`subid`)
) ENGINE=InnoDB AUTO_INCREMENT=3601 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `select_masters`
--

DROP TABLE IF EXISTS `select_masters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `select_masters` (
  `select_id` int NOT NULL AUTO_INCREMENT,
  `select_name` varchar(45) DEFAULT NULL,
  `unique_name` varchar(45) DEFAULT NULL,
  `typeof` varchar(45) DEFAULT NULL,
  `multiple` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`select_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `selectmaster`
--

DROP TABLE IF EXISTS `selectmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `selectmaster` (
  `id` int NOT NULL,
  `select_name` varchar(45) NOT NULL,
  `skey` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `country_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `student_master`
--

DROP TABLE IF EXISTS `student_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `pincode` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `phone` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `student_master_2`
--

DROP TABLE IF EXISTS `student_master_2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_master_2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `phone` bigint DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  `blood` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `subjectmaster`
--

DROP TABLE IF EXISTS `subjectmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjectmaster` (
  `subid` int NOT NULL,
  `sub_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`subid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `techno`
--

DROP TABLE IF EXISTS `techno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `techno` (
  `id` int NOT NULL,
  `tec_id` int DEFAULT NULL,
  `emp_id` int DEFAULT NULL,
  `level_` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tec_id` (`tec_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `techno_ibfk_1` FOREIGN KEY (`tec_id`) REFERENCES `options_master` (`id`),
  CONSTRAINT `techno_ibfk_2` FOREIGN KEY (`emp_id`) REFERENCES `basic_details` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `techno2`
--

DROP TABLE IF EXISTS `techno2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `techno2` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empid` int DEFAULT NULL,
  `tech` varchar(45) DEFAULT NULL,
  `level` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `empid` (`empid`),
  CONSTRAINT `techno2_ibfk_1` FOREIGN KEY (`empid`) REFERENCES `basic_details2` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `pass` varchar(45) DEFAULT NULL,
  `salt` varchar(10) DEFAULT NULL,
  `accesskey` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-01 17:13:33