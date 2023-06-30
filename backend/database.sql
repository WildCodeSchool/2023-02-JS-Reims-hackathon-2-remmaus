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
(0, 49999, 40),
(50000, 99999, 44),
(100000, 150000, 49);

CREATE TABLE ref_memoire (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  mem int(11) NOT NULL,
  val_M int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO ref_memoire (mem, val_M) VALUES 
(1, 30),
(2, 30),
(3, 30),
(4, 30),
(6, 30),
(8, 40),
(12, 40),
(16, 54);

CREATE TABLE ref_stockage (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  stockage int(11) NOT NULL,
  val_S int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO ref_stockage (stockage, val_S) VALUES 
(8, 31),
(16, 31),
(32, 45),
(64, 66),
(128, 66),
(256, 66),
(512, 66),
(1024, 66);

CREATE TABLE modele (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  marque varchar(255) NOT NULL,
  prix_ref int(11) NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO modele (name, marque, prix_ref) VALUES 
('iphone6', 'APPLE', 250);

CREATE TABLE smartphone (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  indice_antutu int(11) NOT NULL,
  status ENUM ('0', '1', '2') NOT NULL DEFAULT '0',
  stockage int(11) NOT NULL,
  memory int(11) NOT NULL,
  ponderation int(11) NOT NULL,
  total_pondere float NOT NULL,
  modele varchar(255) NOT NULL,
  marque varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO smartphone (marque, modele, indice_antutu, stockage, memory, ponderation, total_pondere) VALUES 
('iphone6', 'APPLE', 50000, 16, 6, 0.3, 50),
('iphone6', 'APPLE', 50000, 32, 8, 0.5, 75);

CREATE TABLE user (
  id INT(11) unsigned PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(80) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  mail VARCHAR(40) NOT NULL UNIQUE,
  is_admin BOOLEAN DEFAULT FALSE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

insert into user (username, password, mail, is_admin) VALUES
("admin", "$argon2id$v=19$m=65536,t=5,p=1$LiOUxKuxGlqllBS/orpihg$ztzttCi1WClTHAGgKSZF9xYa579t7gf2P3aqHP1NJZ0", "admin@hackaton.fr", TRUE),
("user", "$argon2id$v=19$m=65536,t=5,p=1$RplfnZnP/TmoEpfK0ranvg$nlSGwC0krCG6Di+7Mu/8N8JgwL0Or3vzP2kBDNDr86s", "user@hackaton.fr", FALSE);
