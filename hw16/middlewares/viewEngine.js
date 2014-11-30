module.exports = function (err, req, res, next) {
    if (err) { return next(err); }

    res.render = function (name, data) {
        var fs = require('fs');
        var filePath = 'views/' + name + '.html';
        var par = {}, pos = 1, key, exp, html;

        try {
            html = fs.readFileSync(filePath).toString();
            for(key in data) {
                //par[key] = {pos: pos, alias: '#_par_' + pos + '_#', value: data[key]};
                par[key] = {pos: pos, alias: Math.random().toString(36).substring(0, 12), value: data[key]};
                exp = new RegExp('{{' + key + '}}', 'g');
                html = html.replace(exp, par[key].alias);
                pos ++;
            }

            for(key in par) {
                exp = new RegExp(par[key].alias, 'g');
                html = html.replace(exp, par[key].value);
            }
            res.write(html);
        }
        catch (e) {
            return;
        }
    };
    next();
};