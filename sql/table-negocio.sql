CREATE TABLE negocio (
  `idNegocio` INT NOT NULL,
  `nombreNegocio` VARCHAR(45) NOT NULL,
  `descripcionNegocio` VARCHAR(100) NOT NULL,
  `idEstado` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  PRIMARY KEY (`idNegocio`),
  CONSTRAINT `idUsuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES usuario (`idUsuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `idEstado`
    FOREIGN KEY (`idEstado`)
    REFERENCES estado (`idEstado`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);