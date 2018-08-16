//Declaring express
var express = require('express');
var app = express();

app.set('view engine', 'ejs'); //Setting the ejs as the display engine

//Receive the address and perform the function
app.get('/company',function (req, res) {
    console.log('received requisition');
    res.render('company/list');
});

app.listen(5021, function () {
    console.log('Server running on http://localhost:5021');
});

