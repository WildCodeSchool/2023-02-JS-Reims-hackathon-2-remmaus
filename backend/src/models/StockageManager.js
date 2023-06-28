const AbstractManager = require("./AbstractManager");

class StockageManager extends AbstractManager {
  constructor() {
    super({ table: "ref_stockage" });
  }

  insert(stockage) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      stockage.title,
    ]);
  }

  update(stockage) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [stockage.title, stockage.id]
    );
  }
}

module.exports = StockageManager;
