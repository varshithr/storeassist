
ALTER TABLE `card_reader_report` 
DROP FOREIGN KEY `fk_card_reader_report_1`;
ALTER TABLE `card_reader_report` 
DROP INDEX `index3` ;

ALTER TABLE `change_order` 
DROP FOREIGN KEY `fk_change_order_1`;
ALTER TABLE `change_order` 
DROP INDEX `fk_change_order_1_idx` ;

ALTER TABLE `cheque_history` 
DROP FOREIGN KEY `fk_cheque_validation_1`;
ALTER TABLE `cheque_history` 
DROP INDEX `fk_cheque_validation_1_idx` ;

ALTER TABLE `it_payment_report` 
DROP FOREIGN KEY `fk_it_payment_report_1`;
ALTER TABLE `it_payment_report` 
DROP INDEX `index3` ;

ALTER TABLE `user_role` 
DROP FOREIGN KEY `fk_user_roles_3`;
ALTER TABLE `user_role` 
DROP INDEX `fk_user_roles_3_idx` ;

DROP TABLE `store`
