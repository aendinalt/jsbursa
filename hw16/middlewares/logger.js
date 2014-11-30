module.exports = function (err, req, res, next) {
    if (err) { return next(err); }

    console.log(req.method + ' ' + req.url +
        ' - ' + req.connection.remoteAddress);
    next();
};
