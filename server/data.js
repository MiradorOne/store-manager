const connection = require('./connection');

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
                        sql  =  'select orders.orderNumber,customerNumber,' +
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
    }
}

module.exports = new Data();