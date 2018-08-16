//Invoking function after EJS setup on express
// Requesting custom-express to load the module that takes care
//...of the routes of the company passing the instance of the app
var express = require('express');

module.exports = function() {
    var app = express();
    app.set('view engine', 'ejs');

    require('./routes/company')(app); //Asks for the function and executes

    return app;
};
