'use strict';
var express = require('express');
var router = express.Router();
var controlador = require('../controllers/controladores');
module.exports = router;
router.get('/users',controlador.users)
router.get('/users/:name/tasks',controlador.usersName)
router.post('/users/:name/tasks',controlador.usersKeyObject)
router.put('/users/:nombre/tasks/:id',controlador.usersTaskComplete)
router.delete('/users/:nombre/tasks/:id',controlador.taskDelete)