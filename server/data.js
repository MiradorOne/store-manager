const connection = require('./connection');
const config = require('./connection.config');

function Data() {
    this.get = function (req, res) {
        connection.acquire(function (err, con) {

            const queryOptions = {
                queryParam: req.params.param,
                queryString: req.query.q || '*',
                table: req.query.table,
                count: req.query.count || false,
                limit: req.query.limit || false,
                where: req.query.where || false
            };

            let sql = '';

            if (queryOptions.queryParam) {
                switch (queryOptions.queryParam) {
                    case 'ordertable':
                        sql = 'select orders.orderNumber,customerNumber,' +
                            'status,productCode,quantityOrdered,priceEach,orderLineNumber ' +
                            'from orders ' +
                            'join orderdetails ' +
                            'on orders.orderNumber = orderdetails.orderNumber ' +
                            `limit ${queryOptions.limit ? queryOptions.limit : 50}`;
                        break;
                    default:
                        break;
                }
            } else {
                sql = `select ${queryOptions.count ? 'count(*) as quantity ' : queryOptions.queryString}
                        from ${queryOptions.table} ${queryOptions.limit ? 'limit ' + queryOptions.limit : ''}
                        ${queryOptions.where ? 'where ' + queryOptions.where : ''}`;
            }

            console.log(sql);

            con.query(sql, function (err, result) {
                if (err) {
                    res.status(404);//TODO: Error handling
                    return res.sendStatus('Error in SQL query')
                }
                con.release();
                res.send(result);
            })
        })
    };

    this.delete = function (req, res) {
        connection.acquire(function (err, con) {
            if (!req.params.number) {
                res.status(403);//
                return res.sendStatus('Access denied')
            } else {
                const sql ='DELETE FROM '+ config.database + '.customers WHERE customers.customerNumber = ' + req.params.number;
                con.query(sql,
                    function (err) {
                        if (err) {
                            console.log(sql);
                            con.release();
                            res.send({success: false, error: err});
                        }
                        con.release();
                        res.send('Customer №'+ req.params.number + ' successfully deleted');
                    }
                )
            }
        })
    };

    this.update = function (req, res) {
        connection.acquire(function (err, con) {
            if (!req.params.number) {
                res.status(403);//
                return res.sendStatus('Access denied')
            } else {

                const sql   = 'UPDATE '+ config.database +'.customers ' +
                        'SET customerName = '+ '"' + req.query.name + '"' +', ' +
                        'contactLastName = '+ '"' + req.query.lastname + '"' +', ' +
                        'contactFirstName = '+ '"' + req.query.firstname + '"' +', ' +
                        'phone = '+ '"' + req.query.phone + '"' +' ' +
                        'WHERE customers.customerNumber = '+ req.params.number + ';';

                con.query(sql,
                    function (err) {
                        if (err) {
                            console.log(sql);
                            con.release();
                            res.send({success: false, error: err});
                        }
                        con.release();
                        res.send('Customer №'+ req.params.number + ' successfully updated');
                    }
                )
            }
        })
    };

    this.insert = function (req, res) {
        connection.acquire(function (err, con) {
            if (!req.params.number) {
                res.status(403);//
                return res.sendStatus('Access denied')
            } else {
                con.query('INSERT INTO ' + config.database + '.customers (customerNumber) VALUES (' + req.params.number + ')',
                    function (err) {
                    if (err) {
                        con.release();
                        res.send({success: false, error: err});
                    }
                        con.release();
                        res.send('Customer successfully added');
                    }
                )
            }
        })
    }
}

module.exports = new Data();