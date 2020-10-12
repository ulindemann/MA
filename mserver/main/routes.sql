
CREATE TABLE `mitarbeiter`.`t_99` ( 
    `id` SERIAL NOT NULL AUTO_INCREMENT , 
    `uid` INT NOT NULL , 
    `name` VARCHAR(255) NOT NULL , 
    `datum` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `modified` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `sperre` VARCHAR(32) NULL , 
    PRIMARY KEY (`id`)) 
    ENGINE = InnoDB;

// Dateitabelle erzeugen 
CREATE TABLE %s (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT , 
    uid INT UNSIGNED NOT NULL ,
    name VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL ,
    size INT UNSIGNED NOT NULL , 
    mime VARCHAR(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL , 
    erstellt DATETIME NOT NULL , 
    modifiziert TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    sperre VARCHAR(32) NULL , 
    PRIMARY KEY (id)) 
    ENGINE = InnoDB ";

CREATE TABLE %s_data (
    id INT UNSIGNED NOT NULL ,
    data MEDIUMBLOB NOT NULL , 
    PRIMARY KEY (id)) 
    ENGINE = InnoDB";

//-- datei rein
INSERT INTO %s ( name, size, mime ) VALUES ( ?, ?, ? );    
INSERT INTO %s_data ( id, data ) VALUES ( ?, ? );

//-- datei raus
( "SELECT  * %s WHERE id = %s", $tabelle, $id );
( "SELECT  id,data FROM %s_data WHERE id = %d", $tabelle, $id );

//-- mitarbeiter rein --------
INSERT INTO t_mitarbeiter ( name, vorname, persnr ) VALUES ( ?, ?, ? );
