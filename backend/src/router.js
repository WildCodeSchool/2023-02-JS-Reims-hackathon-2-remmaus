const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const categoryControllers = require("./controllers/categoryControllers");

router.get("/category", categoryControllers.browse);
router.get("/category/:id", categoryControllers.read);
router.put("/category/:id", categoryControllers.edit);
router.post("/category/:id", categoryControllers.add);
router.delete("/items/:id", categoryControllers.destroy);

const valeurrefControllers = require("./controllers/valeur_refControllers");

router.get("/valeur_ref", valeurrefControllers.browse);
router.get("/valeur_ref/:id", valeurrefControllers.read);
router.put("/valeur_ref/:id", valeurrefControllers.edit);
router.post("/valeur_ref/:id", valeurrefControllers.add);
router.delete("/valeur_ref/:id", valeurrefControllers.destroy);

module.exports = router;
