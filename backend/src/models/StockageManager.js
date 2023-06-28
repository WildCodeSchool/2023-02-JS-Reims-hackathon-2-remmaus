const AbstractManager = require("./AbstractManager");

class StockageManager extends AbstractManager {
  constructor() {
    super({ table: "ref_stockage" });
  }

  insert(ref_stockage) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      stockage.title,
    ]);
  }

  update(ref_stockage) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [indice.title, indice.id]
    );
  }
}

module.exports = StockageManager;
