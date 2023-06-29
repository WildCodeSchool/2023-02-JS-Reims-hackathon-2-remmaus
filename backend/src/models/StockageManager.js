const AbstractManager = require("./AbstractManager");

class StockageManager extends AbstractManager {
  constructor() {
    super({ table: "ref_stockage" });
  }

  insert(stockage) {
    return this.database.query(
      `insert into ${this.table} (stockage, val_S) values (?)`,
      [stockage.stockage, stockage.val_S]
    );
  }

  update(stockage) {
    return this.database.query(
      `update ${this.table} set stockage = ?, val_S = ? where id = ?`,
      [stockage.stockage, stockage.val_S]
    );
  }
}

module.exports = StockageManager;
