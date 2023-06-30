const AbstractManager = require("./AbstractManager");

class smartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  insert(smartphone) {
    const totalPondere =
      (smartphone.val_A + smartphone.val_M + smartphone.val_S) *
      smartphone.ponderation;
    return this.database.query(
      `insert into ${this.table} (marque, modele, indice_antutu, stockage, Memory, ponderation, total_pondere) values (?,?,?,?,?,?,?)`,
      [
        smartphone.marque,
        smartphone.model,
        smartphone.indice,
        smartphone.stockage,
        smartphone.memoire,
        smartphone.ponderation,
        totalPondere,
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
      `SELECT smartphone.id, smartphone.marque, smartphone.modele, smartphone.indice_antutu AS antutu, smartphone.status, smartphone.stockage, smartphone.memory, smartphone.ponderation, category.name AS category FROM smartphone
      JOIN ref_indice ON ref_indice.antutu_min <= smartphone.indice_antutu AND ref_indice.antutu_max >= smartphone.indice_antutu
      JOIN ref_stockage ON ref_stockage.stockage = smartphone.stockage JOIN ref_memoire ON ref_memoire.mem = smartphone.Memory
      JOIN category ON category.val_total_min <= (ref_stockage.val_S + ref_memoire.val_M + ref_indice.val_A) AND category.val_total_max >= (ref_stockage.val_S+ref_memoire.val_M+ref_indice.val_A)`
    );
  }

  find(id) {
    return this.database.query(
      `SELECT smartphone.id, smartphone.marque, smartphone.modele, smartphone.indice_antutu AS antutu, smartphone.status, smartphone.stockage, smartphone.memory, smartphone.ponderation, category.name AS category FROM smartphone
      JOIN ref_indice ON ref_indice.antutu_min <= smartphone.indice_antutu AND ref_indice.antutu_max >= smartphone.indice_antutu
      JOIN ref_stockage ON ref_stockage.stockage = smartphone.stockage JOIN ref_memoire ON ref_memoire.mem = smartphone.Memory
      JOIN category ON category.val_total_min <= (ref_stockage.val_S + ref_memoire.val_M + ref_indice.val_A) AND category.val_total_max >= (ref_stockage.val_S+ref_memoire.val_M+ref_indice.val_A) where smartphone.id = ?`,
      [id]
    );
  }
}

module.exports = smartphoneManager;
