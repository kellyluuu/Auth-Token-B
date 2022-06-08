const express = require("express");
const router = express.Router();
const peopleController = require("../controllers/people");

// IDUCES

router.get("/", peopleController.index);

router.delete("/:id", peopleController.del);

router.put("/:id", peopleController.update);

router.post("/", peopleController.create);

router.get("/:id", peopleController.show);


module.exports = router;
