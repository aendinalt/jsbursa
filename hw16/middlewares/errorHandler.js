module.exports = function (err, req, res, next) {
    if (err) {
        res.writeHead(500, {'Content-Type': 'application/json'});
        if (process.env.NODE_ENV !== "production") {
            res.write(err.message);
        }
        return next(err);
    }

    next();
};
