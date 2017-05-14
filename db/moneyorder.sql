--
-- Table structure for table `mo_forms`
--

DROP TABLE IF EXISTS `mo_forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mo_forms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` datetime NOT NULL,
  `timestamp_ms` decimal(3,0) NOT NULL,
  `range_begin` decimal(10,0) NOT NULL,
  `range_end` decimal(10,0) NOT NULL,
  `location_type` enum('office','supervisor','store','printer','shredder','sold') NOT NULL,
  `location` varchar(80) NOT NULL,
  `actioned_by` varchar(40) DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rangeIndex` (`range_begin`,`range_end`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `money_order_audit_log`
--

DROP TABLE IF EXISTS `money_order_audit_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `money_order_audit_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serial_no` varchar(20) NOT NULL,
  `method` varchar(10) NOT NULL,
  `store` int(11) NOT NULL,
  `t_s` datetime DEFAULT NULL,
  `success` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `moalserialkey` (`serial_no`,`t_s`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `money_orders`
--

DROP TABLE IF EXISTS `money_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `money_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serial_no` varchar(20) NOT NULL,
  `doc_value` decimal(6,2) NOT NULL,
  `purch_t_s` datetime NOT NULL,
  `store` int(11) NOT NULL,
  `trans_no` int(11) NOT NULL,
  `voided` tinyint(1) NOT NULL,
  `void_t_s` datetime DEFAULT NULL,
  `void_store` int(11) DEFAULT NULL,
  `cleared` tinyint(1) NOT NULL,
  `cashed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `serial_no` (`serial_no`),
  UNIQUE KEY `serialkey` (`serial_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
