const mysql = require('mysql');

const makeQuery = function (query) {
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'classicmodels'
    });

    connection.connect();

    connection.query(query, function(err, result) {
        if (err) throw err;

        console.log('The result is: ', result);
    });

    connection.end();
};



module.exports = makeQuery;
