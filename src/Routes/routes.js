const express = require('express');

const router = express.Router();

const controller = require('../controller/livroController');

router.get("/livro", controller.listar);

router.get("/livro/:id", controller.buscar);

module.exports = router;