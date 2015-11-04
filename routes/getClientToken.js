/*
DO NOT MODIFY ME OR THE V.ZERO PROCESS WILL BREAK
*/

module.exports = function (app) {
     app.get('/process/getClientToken/:custid?', function (req, res, next) {
        var gateway = app.get('btgateway'),
            options = {};
        
       console.log(req.params);
        if (req.params.custid) {
            options.customerId = req.params.custid;
        }
        console.log(options);
            
        gateway.clientToken.generate(options, function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result.clientToken);
        }
      });
    });
}
