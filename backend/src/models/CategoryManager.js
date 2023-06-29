const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.database.query(
      `insert into ${this.table} (name, marque, prix_ref) values (?,?,?)`,
      [category.modele, category.marque, category.prix_ref]
    );
  }

  update(category) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [category.title, category.id]
    );
  }
}

module.exports = CategoryManager;
