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

INSERT INTO ref_indice (antutu_min, antutu_max, val_A) VALUES 
(0, 50000, 40),
(50000, 100000, 44),
(100000, 150000, 49);

CREATE TABLE ref_memoire (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mem int(11) NOT NULL,
  val_M int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO ref_memoire (mem, val_M) VALUES 
(6, 30),
(8, 40),
(16, 54);

CREATE TABLE ref_stockage (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  stockage int(11) NOT NULL,
  val_S int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO ref_stockage (stockage, val_S) VALUES 
(16, 31),
(32, 45),
(64, 66);

CREATE TABLE modele (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  marque varchar(255) NOT NULL,
  prix_ref int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO modele (name, marque, prix_ref) VALUES 
('APPLE', 'iphone6', 250);

CREATE TABLE smartphone (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  indice_antutu int(11) NOT NULL,
  status ENUM ('0', '1', '2') DEFAULT '0',
  stockage int(11) NOT NULL,
  Memory int(11) NOT NULL,
  val_A_id int(11) UNSIGNED NOT NULL,
  val_M_id int(11) UNSIGNED NOT NULL,
  val_S_id int(11) UNSIGNED NOT NULL,
  val_total_id int(11) UNSIGNED NULL,
  FOREIGN KEY (val_A_id) REFERENCES `ref_indice`(id),
  FOREIGN KEY (val_M_id) REFERENCES `ref_memoire`(id),
  FOREIGN KEY (val_S_id) REFERENCES `ref_stockage`(id),
  FOREIGN KEY (val_total_id) REFERENCES `category`(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
