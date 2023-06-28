const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const modeleControllers = require("./controllers/modeleControllers");

router.get("/modeles", modeleControllers.browse);
router.get("/modeles/:id", modeleControllers.read);
router.put("/modeles/:id", modeleControllers.edit);
router.post("/modeles", modeleControllers.add);
router.delete("/modeles/:id", modeleControllers.destroy);

const smartphoneControllers = require("./controllers/smartphoneControllers");

router.get("/smartphones", smartphoneControllers.browse);
router.get("/smartphones/:id", smartphoneControllers.read);
router.put("/smartphones/:id", smartphoneControllers.edit);
router.post("/smartphones", smartphoneControllers.add);
router.delete("/smartphones/:id", smartphoneControllers.destroy);

module.exports = router;
