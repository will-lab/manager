/**
 * Arquivo de configuração do Express.js
 */

 // Express.js
 var express = require('express');
 // Consign - para gerenciar as rotas
var consign = require('consign');


module.exports = function(){
        
    var app = express();
    app.set('view engine', 'ejs');

    consign()
        .include('controllers')
        .into(app);

    return app;
}