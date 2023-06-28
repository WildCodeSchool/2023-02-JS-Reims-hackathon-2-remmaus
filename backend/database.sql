CREATE TABLE category (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  val_total_min int(11) NULL,
  val_total_max int(11) NULL,
  name varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO category (val_total_min, val_total_max, name) VALUES 
(0, 89, 'HC'),
(90, 165, 'C'),
(166, 255, 'B'),
(256, 375, 'A'),
(376, null, 'Premium');

CREATE TABLE ref_indice (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  antutu_min int(11) NOT NULL,
  antutu_max int(11) NOT NULL,
  val_A int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE ref_memoire (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mem int(11) NOT NULL,
  val_M int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE ref_stockage (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  stockage int(11) NOT NULL,
  val_S int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;