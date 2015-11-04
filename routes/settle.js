module.exports = function (app) {
     app.post('/process/settle', function (req, res, next) {
        var gateway = app.get('btgateway');
        var form = req.body;
        console.log(form);
        gateway.transaction.submitForSettlement(form.trxid, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });
}
