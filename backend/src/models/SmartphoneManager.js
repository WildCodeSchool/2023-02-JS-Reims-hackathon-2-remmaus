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
}

module.exports = smartphoneManager;
