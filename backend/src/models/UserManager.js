const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, password, mail, is_admin) values (?, ?, ?, ?)`,
      [user.username, user.hashedPassword, user.mail, false]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, password = ?, mail = ? where id = ?`,
      [user.username, user.hashedPassword, user.mail, user.id]
    );
  }
}

module.exports = UserManager;
