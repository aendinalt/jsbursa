var http = require('http');

function Happy () {
    this.middlewares = [];
}

Happy.prototype.use = function (middleware) {
    this.middlewares.push(middleware);
};

function runNextMiddleware (req, res, idx, err) {
    if (idx === this.middlewares.length) {
        return res.end();
    }

    var mw = this.middlewares[idx];
    var fn = typeof mw === 'function' ? mw : mw.handle.bind(mw);

    fn(err, req, res, runNextMiddleware.bind(this, req, res, idx + 1));
}

Happy.prototype.handle = function (req, res) {
    runNextMiddleware.call(this, req, res, 0);
};

Happy.prototype.listen = function (port) {
    var server = http.createServer();
    var that = this;

    server.listen(port);
    server.on('request', function (request, response) {
        that.handle(request, response);
    });
};

module.exports = Happy;
