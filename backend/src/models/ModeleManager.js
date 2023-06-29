const AbstractManager = require("./AbstractManager");

class modeleManager extends AbstractManager {
  constructor() {
    super({ table: "modele" });
  }

  insert(modele) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      modele.title,
    ]);
  }

  update(modele) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [modele.title, modele.id]
    );
  }

  marques() {
    return this.database.query(`SELECT DISTINCT(marque) FROM modele`);
  }
}

module.exports = modeleManager;
