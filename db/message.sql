CREATE DATABASE  IF NOT EXISTS `message_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `message_db`;

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
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `message_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date_sent` date NOT NULL DEFAULT '0000-00-00',
  `time_sent` time NOT NULL DEFAULT '00:00:00',
  `sent_by` varchar(20) NOT NULL DEFAULT '',
  `deliver_date` date NOT NULL DEFAULT '0000-00-00',
  `deliver_time` time NOT NULL DEFAULT '00:00:00',
  `subject` varchar(60) DEFAULT NULL,
  `body` text,
  PRIMARY KEY (`message_id`),
  KEY `xie1message` (`date_sent`,`time_sent`),
  FULLTEXT KEY `xie2message` (`subject`,`body`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `message_store`
--

DROP TABLE IF EXISTS `message_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message_store` (
  `message_id` int(10) unsigned NOT NULL DEFAULT '0',
  `Store` smallint(5) unsigned NOT NULL DEFAULT '0',
  `read` tinyint(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`message_id`,`Store`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `Stores`
--

DROP TABLE IF EXISTS `Stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Stores` (
  `Store` smallint(5) unsigned NOT NULL DEFAULT '0',
  `Addr1` char(30) DEFAULT NULL,
  `Addr2` char(30) DEFAULT NULL,
  `City` char(20) DEFAULT NULL,
  `St` char(2) DEFAULT NULL,
  `Zip` char(10) DEFAULT NULL,
  `Phone` char(16) DEFAULT NULL,
  `Supervisor` smallint(5) unsigned NOT NULL DEFAULT '0',
  `District` char(1) DEFAULT NULL,
  `lat` decimal(18,12) DEFAULT NULL,
  `lon` decimal(18,12) DEFAULT NULL,
  `geoaddr` varchar(80) DEFAULT NULL,
  `Fuel` smallint(6) NOT NULL DEFAULT '0',
  `active` smallint(6) NOT NULL DEFAULT '0',
  `msg` smallint(6) NOT NULL DEFAULT '0',
  `pos` tinyint(3) NOT NULL DEFAULT '0',
  `sbx` tinyint(3) NOT NULL DEFAULT '0',
  `cc` tinyint(3) NOT NULL DEFAULT '0',
  `rg` tinyint(3) NOT NULL DEFAULT '0',
  `cq_loc_code` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`Store`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stores`
--

LOCK TABLES `Stores` WRITE;
/*!40000 ALTER TABLE `Stores` DISABLE KEYS */;
INSERT INTO `Stores` VALUES (18,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,0,0,0,0,1,0,0,'6430000070');
/*!40000 ALTER TABLE `Stores` ENABLE KEYS */;
UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
