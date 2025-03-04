const controller = require('../controller/gamesController');
const express = require('express');

const router = express.Router();

router.get("" , controller.findByName)

router.get("/all", controller.findAllGames);

router.get("/:id", controller.findGameById);

router.post("/add", controller.addNewGame);

router.patch("/:id", controller.updateGame);

router.delete("/:id", controller.deleteGame);

module.exports = router