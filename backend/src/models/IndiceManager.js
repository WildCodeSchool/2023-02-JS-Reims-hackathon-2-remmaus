const AbstractManager = require("./AbstractManager");

class IndiceManager extends AbstractManager {
  constructor() {
    super({ table: "ref_indice" });
  }

  insert(indice) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      indice.title,
    ]);
  }

  update(indice) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [indice.title, indice.id]
    );
  }
}

module.exports = IndiceManager;
