const AbstractManager = require("./AbstractManager");

class IndiceManager extends AbstractManager {
  constructor() {
    super({ table: "ref_indice" });
  }

  insert(indice) {
    return this.database.query(
      `insert into ${this.table} (antutu_min, antutu_max, val_A)) values (?)`,
      [indice.antutu_min, indice.antutu_max, indice.val_A]
    );
  }

  update(indice) {
    return this.database.query(
      `update ${this.table} set antutu_min= ?, antutu_max= ?, val_A = ? where id = ?`,
      [indice.antutu_min, indice.antutu_max, indice.val_A]
    );
  }
}

module.exports = IndiceManager;
