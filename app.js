'use strict';
var express = require('express');
var bodyParser = require('body-parser');
const routes = require('./routes');
var app = express();
module.exports = app;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);
app.listen(4000,()=>(console.log("arranco el partido")));

// como dato importante no lo habia terminado todo habia llegado a POST, pero aprendi
// por mi cuenta un par de cosas y decidi refactorizarlo agregando los controladores.
// SALUDOS BUEN FINDE!!!!!!!!!!!!!11
