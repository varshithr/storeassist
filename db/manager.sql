ALTER TABLE `storeAssist`.`user_role`
DROP FOREIGN KEY `fk_user_roles_2`,
DROP FOREIGN KEY `fk_user_roles_1`;
ALTER TABLE `storeAssist`.`user_role`
DROP INDEX `fk_user_roles_2_idx` ,
DROP INDEX `fk_user_roles_1_idx` ,
DROP INDEX `index5` ;


DELETE FROM `user` WHERE id in (SELECT user_id FROM user_role where role_id = 112);

DELETE FROM `user_role` WHERE role_id = 112;

DELETE FROM `role` WHERE id = 112;

ALTER TABLE `storeAssist`.`user_role`
ADD INDEX `fk_user_role_1_idx` (`user_id` ASC),
ADD INDEX `fk_user_role_2_idx` (`role_id` ASC),
ADD UNIQUE INDEX `index4` (`user_id` ASC, `role_id` ASC, `store_id` ASC);
ALTER TABLE `storeAssist`.`user_role`
ADD CONSTRAINT `fk_user_role_1`
  FOREIGN KEY (`user_id`)
  REFERENCES `storeAssist`.`user_role` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_user_role_2`
  FOREIGN KEY (`role_id`)
  REFERENCES `storeAssist`.`role` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
