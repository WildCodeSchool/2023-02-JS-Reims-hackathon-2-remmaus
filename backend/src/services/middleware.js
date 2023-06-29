const models = require("../models");

const checkIndice = (req, res, next) => {
  models.indice
    .checkIndice(req.body.indice)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        req.body.val_A = rows[0].val_A;
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const checkMemoire = (req, res, next) => {
  models.memoire
    .checkMemoire(req.body.memoire)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        req.body.val_M = rows[0].val_M;
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const checkStockage = (req, res, next) => {
  models.stockage
    .checkStockage(req.body.stockage)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        req.body.val_S = rows[0].val_S;
        next();
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addCate = (req, res, next) => {
  if (req.body.modele) {
    const category = req.body;
    models.category
      .insert(category)
      .then(([result]) => {
        req.body.modele_id = result.insertId;
        next();
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    next();
  }
};

module.exports = { checkIndice, checkMemoire, checkStockage, addCate };
