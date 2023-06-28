const AbstractManager = require("./AbstractManager");

class MemoireManager extends AbstractManager {
  constructor() {
    super({ table: "ref_memoire" });
  }

  insert(ref_memoire) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      indice.title,
    ]);
  }

  update(ref_memoire) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [indice.title, indice.id]
    );
  }
}

module.exports = MemoireManager;
