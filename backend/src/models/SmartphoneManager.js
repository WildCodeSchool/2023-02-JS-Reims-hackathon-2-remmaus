const AbstractManager = require("./AbstractManager");

class smartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphone" });
  }

  insert(smartphone) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      smartphone.title,
    ]);
  }

  update(smartphone) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [smartphone.title, smartphone.id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT smartphone.id, modele.marque, modele.name AS modele, smartphone.indice_antutu AS antutu, smartphone.status, smartphone.Memory AS RAM, smartphone.stockage, category.name AS category, smartphone.part_number FROM smartphone JOIN category ON category.id = smartphone.val_total_id JOIN modele ON modele.id = smartphone.modele_id`
    );
  }
}

module.exports = smartphoneManager;
