const connection = require('./connection');

function Data() {
    this.get = function (res) {
        connection.acquire(function (err, con) {
            con.query('select * from offices', function (err, result) {
                if (err)
                    throw err;
                con.release();
                res.send(result);
            })
        })
    }
}

module.exports = new Data();