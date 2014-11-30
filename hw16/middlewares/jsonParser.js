module.exports = function (err, req, res, next) {
    var json = '';

    if (err) { return next(err); }

    if (req.headers['content-type'] === 'application/json') {
        req.on('data', function (data) {
            json += data;
        });

        req.on('end', function () {
            req.body = {};
            if (json) {
                try {
                    req.body = JSON.parse(json);
                }
                catch (e) {
                    return next(e);
                }
            }
            next();
        });
    } else { next(); }
};
