const AbstractManager = require("./AbstractManager");

class MemoireManager extends AbstractManager {
  constructor() {
    super({ table: "ref_memoire" });
  }

  insert(memoire) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      memoire.title,
    ]);
  }

  update(memoire) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [memoire.title, memoire.id]
    );
  }
}

module.exports = MemoireManager;
