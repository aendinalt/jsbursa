function Router () {
    this.rules = [];
    this.params = {};
}

Router.prototype.getUrlIndex = function (url, method) {
    function isValue(str) {
        return (str.length > 0);
    }

    this.params = {};
    for(var i = 0; i < this.rules.length; i++) {
        if (this.rules[i].method === method) {
            if (this.rules[i].exp === this.rules[i].url) {
                if (url === this.rules[i].url) { return i; }
            } else {
                var exp = new RegExp(this.rules[i].exp);
                if (exp.test(url)) {
                    var par = url.split(exp).filter(isValue);
                    if (par.length === this.rules[i].par.length) {
                        for(var j = 0; j < par.length; j++) {
                            this.params[this.rules[i].par[j].par] = par[j];
                        }
                        return i;
                    }
                }
            }
        }
    }
    return -1;
};

Router.prototype.addUrl = function (url, method, handler) {
    var path = url.substring(1).split('/');
    var par = [], exp = '';

    for(var i = 0; i < path.length; i++) {
        if (path[i].substring(0, 1) === ':') {
            par.push({pos: i, par: path[i].substring(1)});
            exp += '/(.*)';
        } else {
            exp += '/' + path[i];
        }
    }

    this.rules.push({url: url, method: method, handler: handler, par: par, exp: exp});
};

Router.prototype.get = function (url, handler) {
    this.addUrl(url, 'GET', handler);
};

Router.prototype.post = function (url, handler) {
    this.addUrl(url, 'POST', handler);
};

Router.prototype.handle = function (err, req, res, next) {
    if (err) { return next(err); }

    var i = this.getUrlIndex(req.url, req.method);
    if (i > -1) {
        return this.rules[i].handler(req, res, next, this.params);
    } else { next(); }
};

module.exports = Router;
