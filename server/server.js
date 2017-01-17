const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./connection');
const Data = require('./data');

const conn = connection.init();

const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

const server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
});

app.get('/api/', function (req, res) {
    Data.get(req, res);
});

app.get('/api/:param/', function (req, res) {
    Data.get(req, res);
});

app.post('/customers/:number', function (req, res) {
    Data.insert(req, res);
});

app.put('/customers/:number', function (req, res) {
    Data.update(req, res);
});

app.delete('/customers/:number', function (req, res) {
    Data.delete(req, res);
});






