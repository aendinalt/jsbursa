module.exports = function (err, req, res, next) {
    if (err) {
        return next(err);
    }
    if (req.method == 'POST'){
        var json = '';
        if (req.headers['content-type'] === 'application/json'){
            req.on('data', function(data){
                json += data;
            });
            req.on('end', function(){
                if (json.length > 0){
                    req.body = JSON.parse(json);
                    console.log(req.body);
                } else {
                    req.body = '';
                }
            });
        }
    }
    next();
};