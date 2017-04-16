const connection = require('./connection');
const config = require('./connection.config');
const log = require('winston');
const validator = require('validator');

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
                    case 'orders':
                        sql = 'select orderdetails.id as detailsId, orders.orderNumber, orderDate, ' +
                            'requiredDate, shippedDate, comments, customerNumber, ' +
                            'status ' +
                            'from orders ' +
                            'join orderdetails ' +
                            'on orders.orderNumber = orderdetails.orderNumber ';
                        break;
                    default:
                        break;
                }
            } else {
                sql = `select ${queryOptions.count ? 'count(*) as quantity ' : queryOptions.queryString}
                        from ${queryOptions.table} ${queryOptions.limit ? 'limit ' + queryOptions.limit : ''}
                        ${queryOptions.where ? 'where ' + queryOptions.where : ''}`;
            }

            log.info(sql);

            con.query(sql, function (err, result) {
                if (err) {
                    con.release();
                    res.status(400);
                    res.send('Wrong query');
                    return log.error(err);
                }
                con.release();
                res.send(result);
            })
        })
    };

    this.delete = function (req, res) {
        connection.acquire(function (err, con) {

            log.info('DELETE FROM ' + config.database + '.customers WHERE customers.customerNumber = ' + con.escape(req.params.number));

            if (!validator.isNumeric(req.params.number)) {
                res.status(400);
                res.send('Enter a number!');
                con.release();
                return log.error(err);
            }

            const sql = 'DELETE FROM ' + config.database + '.customers WHERE customers.customerNumber = ' + con.escape(req.params.number);
            con.query(sql,
                function (err) {
                    if (err) {
                        con.release();
                        res.send({success: false, error: err});
                        return log.error(err);
                    }
                    con.release();
                    res.send('Customer №' + req.params.number + ' successfully deleted');
                }
            )
        })
    };

    this.update = function (req, res) {
        connection.acquire(function (err, con) {

            let sql = '';

            if (validator.isNumeric(req.params.number)) {

                sql = 'UPDATE ' + config.database + '.customers ' +
                    'SET customerName = ' + '"' + req.query.name + '"' + ', ' +
                    'contactLastName = ' + '"' + req.query.lastname + '"' + ', ' +
                    'contactFirstName = ' + '"' + req.query.firstname + '"' + ', ' +
                    'phone = ' + '"' + req.query.phone + '"' + ' ' +
                    'WHERE customers.customerNumber = ' + req.params.number + ';';
                log.info(sql);
            } else {
                log.error(err);
            }


            con.query(sql,
                function (err) {
                    if (err) {
                        if (err.code === 'ER_EMPTY_QUERY') {
                            con.release();
                            res.status(400);
                            res.send('Something wrong with a query');
                            return log.error(err);
                        } else {
                            con.release();
                            res.send({success: false, error: err});
                            return log.error(err);
                        }
                    }
                    con.release();
                    res.send('Customer №' + req.params.number + ' successfully updated');
                }
            )
        })
    };

    this.insert = function (req, res) {
        connection.acquire(function (err, con) {
            log.info('INSERT INTO ' + config.database + '.customers (customerNumber) VALUES (' + con.escape(req.params.number) + ')');

            if (!validator.isNumeric(req.params.number)) {
                res.status(400);
                res.send('Enter a number!');
                con.release();
                return log.error(err);
            }

            con.query('INSERT INTO ' + config.database + '.customers (customerNumber) VALUES (' + con.escape(req.params.number) + ')',
                function (err) {
                    if (err) {
                        if (err.code === 'ER_DUP_ENTRY') {
                            res.status(403);
                            res.send('Customer with this number already exists.');
                            con.release();
                            return log.error(err);
                        }
                    }
                    con.release();
                    res.send('Customer successfully added');
                }
            )
        })
    }
}

module.exports = new Data();