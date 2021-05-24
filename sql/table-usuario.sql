CREATE TABLE usuario (
  `idUsuario` INT NOT NULL,
  `nombre` VARCHAR(25) NOT NULL,
  `apellidos` VARCHAR(60) NOT NULL,
  `genero` VARCHAR(15) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  `password` VARCHAR(15) NOT NULL,
  `tipo` VARCHAR(15) NOT NULL,
  `idEstado` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  CONSTRAINT `idEstado`
    FOREIGN KEY (`idEstado`)
    REFERENCES estado (`idEstado`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);