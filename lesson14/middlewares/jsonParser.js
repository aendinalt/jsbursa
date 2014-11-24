module.exports = function (err, req, res, next) {
    if (err) {
        return next(err);
    }
    if (req.method == 'POST'){
        var body = '';
        if (req.headers['content-type'] === 'application/json'){
            req.on('data', function(data){
                body += data;
            });
            req.on('end', function(){
                if (body.length > 0){
                    req.body = JSON.parse(body);
                } else {
                    req.body = '';
                }
            });
        }
    }
    next();
};
