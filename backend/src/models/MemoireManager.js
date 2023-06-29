const AbstractManager = require("./AbstractManager");

class MemoireManager extends AbstractManager {
  constructor() {
    super({ table: "ref_memoire" });
  }

  insert(memoire) {
    return this.database.query(
      `insert into ${this.table} (mem, val_M) values (?)`,
      [memoire.mem, memoire.val_M]
    );
  }

  update(memoire) {
    return this.database.query(
      `update ${this.table} set mem = ?, val_M = ? where id = ?`,
      [memoire.mem, memoire.val_M]
    );
  }
}

module.exports = MemoireManager;
