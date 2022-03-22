-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema crmlocal
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema crmlocal
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `crmlocal` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci ;
USE `crmlocal` ;

-- -----------------------------------------------------
-- Table `crmlocal`.`entidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crmlocal`.`entidad` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `cif` VARCHAR(9) NOT NULL,
  `dir3` VARCHAR(10) NOT NULL,
  `direccion` VARCHAR(100) NULL,
  `cp` VARCHAR(5) NULL,
  `localidad` VARCHAR(45) NULL,
  `provincia` VARCHAR(45) NULL,
  `telefono` VARCHAR(15) NULL,
  `email` VARCHAR(45) NULL,
  `tags` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE,
  UNIQUE INDEX `cif_UNIQUE` (`cif` ASC) VISIBLE,
  UNIQUE INDEX `dir3_UNIQUE` (`dir3` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `crmlocal`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crmlocal`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nif` VARCHAR(15) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `cargo` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `telefono` VARCHAR(15) NULL,
  `tags` VARCHAR(2000) NULL,
  `entidad_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuario_entidad_idx` (`entidad_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_entidad`
    FOREIGN KEY (`entidad_id`)
    REFERENCES `crmlocal`.`entidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `crmlocal`.`etiqueta_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `crmlocal`.`etiqueta_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
