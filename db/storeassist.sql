CREATE DATABASE  IF NOT EXISTS `storeAssist` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `storeAssist`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `card_reader_report`
--

DROP TABLE IF EXISTS `card_reader_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
DROP TABLE IF EXISTS `card_reader_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card_reader_report` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `store_id` bigint(20) NOT NULL,
  `employee_initials` varchar(45) NOT NULL,
  `reported_date` date NOT NULL,
  `reported_time` time NOT NULL,
  `checked` smallint(2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_card_reader_report_1_idx` (`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `cash_recons`
--

DROP TABLE IF EXISTS `cash_recons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cash_recons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `store` tinyint(3) unsigned NOT NULL,
  `type` enum('checkin','endofday') DEFAULT NULL,
  `datetime` datetime NOT NULL,
  `initials` varchar(3) DEFAULT NULL,
  `register` decimal(8,2) DEFAULT NULL,
  `drawer` decimal(8,2) DEFAULT NULL,
  `top_of_safe` decimal(8,2) DEFAULT NULL,
  `change_fund` decimal(8,2) DEFAULT NULL,
  `ending_cash` decimal(8,2) DEFAULT NULL,
  `drops` decimal(8,2) DEFAULT NULL,
  `checks` decimal(8,2) DEFAULT NULL,
  `change_orders` decimal(8,2) DEFAULT NULL,
  `beginning_cash` decimal(8,2) DEFAULT NULL,
  `todays_cash` decimal(8,2) DEFAULT NULL,
  `cash_sales` decimal(8,2) DEFAULT NULL,
  `over_short` decimal(8,2) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `bdate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `store_key` (`store`,`bdate`,`type`),
  KEY `bdate_key` (`bdate`,`store`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `change_order`
--

DROP TABLE IF EXISTS `change_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `change_order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `store_id` bigint(20) NOT NULL,
  `ordered_by` varchar(45) NOT NULL,
  `ordered_time` datetime NOT NULL,
  `order_status` varchar(45) NOT NULL,
  `received_by` varchar(45) DEFAULT NULL,
  `received_time` datetime DEFAULT NULL,
  `received_status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `change_order_details`
--

DROP TABLE IF EXISTS `change_order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `change_order_details` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `change_order_id` bigint(20) NOT NULL,
  `currency_id` int(11) NOT NULL,
  `order_amount` int(11) DEFAULT NULL,
  `received_amount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_change_order_details_1_idx` (`change_order_id`),
  KEY `fk_change_order_details_2_idx` (`currency_id`),
  CONSTRAINT `fk_change_order_details_1` FOREIGN KEY (`change_order_id`) REFERENCES `change_order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_change_order_details_2` FOREIGN KEY (`currency_id`) REFERENCES `currency` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `cheque_history`
--

DROP TABLE IF EXISTS `cheque_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cheque_history` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cheque_number` int(11) NOT NULL,
  `account_number` bigint(20) NOT NULL,
  `routing_number` int(11) NOT NULL,
  `store_id` bigint(20) NOT NULL,
  `amount` int(11) NOT NULL,
  `auth_code` int(11) NOT NULL,
  `checked_time` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index3` (`cheque_number`,`account_number`,`routing_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `currency`
--

DROP TABLE IF EXISTS `currency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `currency` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `value` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `currency`
--

LOCK TABLES `currency` WRITE;
/*!40000 ALTER TABLE `currency` DISABLE KEYS */;
INSERT INTO `currency` VALUES (1,'Twenties',20),(2,'Fives',5),(3,'Ones',1),(4,'Quarters Roll(s)',10),(5,'Dimes Roll(s)',5),(6,'Nickles Roll(s)',2),(7,'Pennies Box(s)',25);
/*!40000 ALTER TABLE `currency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drpmpchk`
--

DROP TABLE IF EXISTS `drpmpchk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drpmpchk` (
  `store` tinyint(3) unsigned NOT NULL,
  `bdate` date NOT NULL DEFAULT '0001-01-01',
  `date` date NOT NULL DEFAULT '0001-01-01',
  `hr` tinyint(4) NOT NULL DEFAULT '0',
  `min` tinyint(4) NOT NULL DEFAULT '0',
  `sec` tinyint(4) NOT NULL DEFAULT '0',
  `init` varchar(3) DEFAULT NULL,
  `dipped_yn` char(1) DEFAULT NULL,
  `status` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`store`,`bdate`),
  UNIQUE KEY `date_key` (`bdate`,`store`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `drpmpdip`
--

DROP TABLE IF EXISTS `drpmpdip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `drpmpdip` (
  `store` tinyint(3) unsigned NOT NULL,
  `bdate` date NOT NULL DEFAULT '0001-01-01',
  `tankno` smallint(5) unsigned NOT NULL,
  `grade` varchar(5) NOT NULL DEFAULT ' ',
  `descr` varchar(30) NOT NULL DEFAULT ' ',
  `inches` decimal(8,2) DEFAULT NULL,
  `gallons` decimal(8,2) DEFAULT NULL,
  `ullage` decimal(8,2) DEFAULT NULL,
  `water_inches` decimal(8,2) DEFAULT NULL,
  `temp` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`store`,`bdate`,`tankno`),
  UNIQUE KEY `date_key` (`bdate`,`store`,`tankno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `it_payment_report`
--

DROP TABLE IF EXISTS `it_payment_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
DROP TABLE IF EXISTS `it_payment_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `it_payment_report` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `store_id` bigint(20) NOT NULL,
  `employee_initials` varchar(45) NOT NULL,
  `reported_date` date NOT NULL,
  `reported_time` time NOT NULL,
  `checked` smallint(2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_it_payment_report_1_idx` (`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pos_medshift`
--

DROP TABLE IF EXISTS `pos_medshift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pos_medshift` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `recon_id` int(10) unsigned NOT NULL,
  `store` tinyint(3) unsigned NOT NULL,
  `dayid` int(10) unsigned NOT NULL,
  `mediano` smallint(5) unsigned NOT NULL,
  `terminalno` smallint(5) unsigned NOT NULL DEFAULT '0',
  `shiftno` smallint(5) unsigned NOT NULL,
  `dlycount` decimal(15,4) DEFAULT NULL,
  `dlysales` decimal(15,4) DEFAULT NULL,
  `dlyoutsidesales` decimal(15,4) DEFAULT '0.0000',
  `dlyfuel` decimal(15,4) DEFAULT '0.0000',
  `dlyoutsidefuel` decimal(15,4) DEFAULT '0.0000',
  `dlyoutsidecount` decimal(15,4) DEFAULT '0.0000',
  `dlytax` decimal(15,4) DEFAULT '0.0000',
  `ts` datetime DEFAULT NULL,
  `bdate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `checkin_key` (`recon_id`,`store`),
  KEY `store_key` (`store`,`bdate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pos_medshift_tmp`
--

DROP TABLE IF EXISTS `pos_medshift_tmp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pos_medshift_tmp` (
  `store` tinyint(3) unsigned NOT NULL,
  `dayid` int(10) unsigned NOT NULL,
  `mediano` smallint(5) unsigned NOT NULL,
  `terminalno` smallint(5) unsigned NOT NULL DEFAULT '0',
  `shiftno` smallint(5) unsigned NOT NULL,
  `dlycount` decimal(15,4) DEFAULT NULL,
  `dlysales` decimal(15,4) DEFAULT NULL,
  `dlyoutsidesales` decimal(15,4) DEFAULT '0.0000',
  `dlyfuel` decimal(15,4) DEFAULT '0.0000',
  `dlyoutsidefuel` decimal(15,4) DEFAULT '0.0000',
  `dlyoutsidecount` decimal(15,4) DEFAULT '0.0000',
  `dlytax` decimal(15,4) DEFAULT '0.0000',
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`store`,`dayid`,`mediano`,`terminalno`,`shiftno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (111,'Employee'),(112,'Manager'),(113,'Admin'),(114,'Help'),(115,'SuperAdmin');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sbx_event`
--

DROP TABLE IF EXISTS `sbx_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sbx_event` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `store` smallint(5) unsigned NOT NULL,
  `eid` bigint(20) unsigned NOT NULL,
  `etime` datetime NOT NULL,
  `etype` varchar(20) NOT NULL,
  `dayid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `se_key` (`store`,`eid`),
  UNIQUE KEY `day_key` (`store`,`dayid`,`etype`,`eid`),
  UNIQUE KEY `etime_key` (`etime`,`store`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sbx_event_tmp`
--

DROP TABLE IF EXISTS `sbx_event_tmp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sbx_event_tmp` (
  `store` smallint(5) unsigned NOT NULL,
  `eid` bigint(20) unsigned NOT NULL,
  `etime` datetime NOT NULL,
  `etype` varchar(20) NOT NULL,
  `dayid` int(11) NOT NULL,
  PRIMARY KEY (`store`,`eid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sbx_stack`
--

DROP TABLE IF EXISTS `sbx_stack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sbx_stack` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `store` smallint(5) unsigned NOT NULL,
  `eid` bigint(20) unsigned NOT NULL,
  `stype` varchar(20) NOT NULL,
  `svault` tinyint(4) NOT NULL DEFAULT '-1',
  `sindex` tinyint(4) NOT NULL DEFAULT '-1',
  `form` enum('cash','check','other') NOT NULL DEFAULT 'cash',
  `denomination` int(11) NOT NULL DEFAULT '-1',
  `count` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sesssfd_key` (`store`,`eid`,`stype`(1),`svault`,`sindex`,`form`,`denomination`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sbx_stack_tmp`
--

DROP TABLE IF EXISTS `sbx_stack_tmp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sbx_stack_tmp` (
  `store` smallint(5) unsigned NOT NULL,
  `eid` bigint(20) unsigned NOT NULL,
  `stype` varchar(20) NOT NULL,
  `svault` tinyint(4) NOT NULL DEFAULT '-1',
  `sindex` tinyint(4) NOT NULL DEFAULT '-1',
  `form` enum('cash','check','other') NOT NULL DEFAULT 'cash',
  `denomination` int(11) NOT NULL DEFAULT '-1',
  `count` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  PRIMARY KEY (`store`,`eid`,`stype`(1),`svault`,`sindex`,`form`,`denomination`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tank_readings`
--

DROP TABLE IF EXISTS `tank_readings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tank_readings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `store` tinyint(3) unsigned NOT NULL,
  `dayid` int(10) unsigned NOT NULL,
  `tankno` smallint(5) unsigned NOT NULL,
  `grade` smallint(5) unsigned NOT NULL,
  `descr` varchar(30) NOT NULL,
  `inches` decimal(8,2) DEFAULT NULL,
  `gallons` decimal(8,2) DEFAULT NULL,
  `ullage` decimal(8,2) DEFAULT NULL,
  `water_inches` decimal(8,2) DEFAULT NULL,
  `temp` decimal(8,2) DEFAULT NULL,
  `ts` datetime DEFAULT NULL,
  `bdate` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `store_key` (`store`,`bdate`,`tankno`),
  UNIQUE KEY `bdate_key` (`bdate`,`store`,`tankno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tank_readings_tmp`
--

DROP TABLE IF EXISTS `tank_readings_tmp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tank_readings_tmp` (
  `store` tinyint(3) unsigned NOT NULL,
  `dayid` int(10) unsigned NOT NULL,
  `tankno` smallint(5) unsigned NOT NULL,
  `grade` smallint(5) unsigned NOT NULL,
  `descr` varchar(30) NOT NULL,
  `inches` decimal(8,2) DEFAULT NULL,
  `gallons` decimal(8,2) DEFAULT NULL,
  `ullage` decimal(8,2) DEFAULT NULL,
  `water_inches` decimal(8,2) DEFAULT NULL,
  `temp` decimal(8,2) DEFAULT NULL,
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`store`,`dayid`,`tankno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(256) NOT NULL,
  `initials` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','venkat','venkat@scriptbees.com','99a4977789ec484285f7180aa7d6d78921a604600cb462f58e13c050b09e105678918ea67d2ab70ea6f2dd7fdb7c0fae','D'),(2,'manager','madhura','madhura.morajkar@scriptbees.com','2be5b04da0214ffaaa919e6118191f1cc84cad735caf6ed02fca7a2d66ad2a99aecda03aca27c42f6b977a3f586ae31f','M'),(3,'employee','purnesh','purnesh.anugolu@scriptbees.com','116c133ba6144e5998d13a771f94647cd386df4140e63815b76419727605e85be452bb98ad3d6a47230cf878e084aeab','A'),(4,'help','madan','madan@7eleven.com','106a5842fc5fce6f663176285ed1516d06a49a9ab1a0c5bc5e27fa98c2bf355d78b4602f381ff1ea26ea7e999c49d84d','S'),(5,'superadmin','vineeth','vineeth@7eleven.com','977e8fc2bc25452fa67364a4becb361077ca0ed83956ad8ab42a858b05ce7f104d6a927fa8236819df659db65d753a26','K');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL,
  `store_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index5` (`user_id`,`role_id`,`store_id`),
  KEY `fk_user_roles_1_idx` (`user_id`),
  KEY `fk_user_roles_2_idx` (`role_id`),
  CONSTRAINT `fk_user_roles_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_roles_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,1,113,18),(2,2,112,18),(3,3,111,18),(4,4,114,18),(5,5,115,18);;
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'storeAssist'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
