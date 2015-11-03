module.exports = function (app) {
     app.post('/process/settle', function (req, res, next) {
        var gateway = app.get('btgateway');
        
        gateway.transaction.submitForSettlement(req.body.trxid, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });
}