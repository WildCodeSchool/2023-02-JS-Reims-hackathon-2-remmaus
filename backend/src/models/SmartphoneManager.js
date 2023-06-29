const AbstractManager = require("./AbstractManager");

class smartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  insert(smartphone) {
    return this.database.query(
      `insert into ${this.table} (modele_id, indice_antutu, stockage, Memory, part_number) values (?,?,?,?,?)`,
      [
        smartphone.modele_id,
        smartphone.indice,
        smartphone.stockage,
        smartphone.memoire,
        smartphone.part_number,
      ]
    );
  }

  update(smartphone) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [smartphone.modele, smartphone.id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT smartphone.id, modele.marque, modele.name, smartphone.indice_antutu AS antutu, smartphone.status, smartphone.stockage, smartphone.memory, smartphone.part_number, category.name AS category FROM smartphone 
      JOIN modele ON modele.id = smartphone.modele_id
      JOIN ref_indice ON ref_indice.antutu_min <= smartphone.indice_antutu AND ref_indice.antutu_max >= smartphone.indice_antutu
      JOIN ref_stockage ON ref_stockage.stockage = smartphone.stockage JOIN ref_memoire ON ref_memoire.mem = smartphone.Memory
      JOIN category ON category.val_total_min <= (ref_stockage.val_S + ref_memoire.val_M + ref_indice.val_A) AND category.val_total_max >= (ref_stockage.val_S+ref_memoire.val_M+ref_indice.val_A)`
    );
  }
}

module.exports = smartphoneManager;
