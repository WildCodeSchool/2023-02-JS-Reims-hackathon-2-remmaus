const express = require("express");

const router = express.Router();

// const {} = require("./services/middleware");

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

const indiceControllers = require("./controllers/indiceControllers");

router.get("/ref_indice", indiceControllers.browse);
router.get("/ref_indice/:id", indiceControllers.read);
router.put("/ref_indice/:id", indiceControllers.edit);
router.post("/ref_indice/:id", indiceControllers.add);
router.delete("/ref_indice/:id", indiceControllers.destroy);

const memoireControllers = require("./controllers/memoireControllers");

router.get("/ref_memoire", memoireControllers.browse);
router.get("/ref_memoire/:id", memoireControllers.read);
router.put("/ref_memoire/:id", memoireControllers.edit);
router.post("/ref_memoire/:id", memoireControllers.add);
router.delete("/ref_memoire/:id", memoireControllers.destroy);

const stockageControllers = require("./controllers/stockageControllers");

router.get("/ref_stockage", stockageControllers.browse);
router.get("/ref_stockage/:id", stockageControllers.read);
router.put("/ref_stockage/:id", stockageControllers.edit);
router.post("/ref_stockage/:id", stockageControllers.add);
router.delete("/ref_stockage/:id", stockageControllers.destroy);

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
