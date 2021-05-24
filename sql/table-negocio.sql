CREATE TABLE negocio (
  `idNegocio` INT NOT NULL,
  `nombreNegocio` VARCHAR(45) NOT NULL,
  `descripcionNegocio` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(11) NOT NULL,
  `email` VARCHAR(20),
  `price` VARCHAR(30) NOT NULL,
  `idEstado` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  `idCategoria`INT NOT NULL,
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
    ON UPDATE CASCADE,
  CONSTRAINT `idCategoria`
    FOREIGN KEY (`idCategoria`)
    REFERENCES categoria (`idCategoria`)
    ON DELETE CASCADE
    ON UPDATE CASCADE  );