var Happy = require('./happy');
var logger = require('./middlewares/logger');
var jsonParser = require('./middlewares/jsonParser');
var viewEngine = require('./middlewares/viewEngine');
var Router = require('./middlewares/router');
var errorHandler = require('./middlewares/errorHandler');

var router = new Router();

router.get('/test', function (req, res, next) { res.render('test', { word1: '{{word3}}', word2: 'котик', word3: '{{word2}}' }); next(); }) ;
router.get('/nano', function (req, res, next) { res.render('nano', { title: 'JSBursa1', color: 'green', bs: '{{color}}' }); next(); }) ;
router.get('/nano/', function (req, res, next) { res.render('nano', { title: 'JSBursa2', color: 'green', bs: 'green' }); next(); }) ;
router.post('/nano', function (req, res, next) { res.render('nano', { title: 'JSBursa', color: 'green', bs: 'red' }); next(); }) ;
router.get('/code', function (req, res, next) { res.end('Hello /code'); next(); }) ;
router.post('/code', function (req, res, next) { res.end('Hello -/code'); next(); }) ;
router.post('/otherthing', function (req, res, next) { res.end('Hello /otherthing'); next(); }) ;
router.get('/user', function (req, res, next) { res.end('Hello /user'); next(); }) ;
router.get('/user/:id', function (req, res, next, params) { res.end('Hello /user' + JSON.stringify(params)); next(); });
router.get('/user/', function (req, res, next) { res.end('Hello /user/'); next(); }) ;
router.get('/data/:test', function (req, res, next, params) { res.end('Hello /data' + JSON.stringify(params)); next(); });
router.get('/library/:catalog/:id', function (req, res, next, params) { res.end('Hello /data' + JSON.stringify(params)); next(); });

var app = new Happy();

app.use(logger);
app.use(jsonParser);
app.use(viewEngine);
app.use(router);
app.use(errorHandler);

if (module.parent) {
    module.exports = app;
} else {
    app.listen(process.env.PORT || 3000);
}
