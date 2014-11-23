var Happy = require('./happy');
var logger = require('./middlewares/logger');
var jsonParser = require('./middlewares/jsonParser');
var viewEngine = require('./middlewares/viewEngine');
var Router  = require('./middlewares/router');
var errorHandler = require('./middlewares/errorHandler');

var router = new Router();

router.get('/code', function (req, res, next) { res.end('Hello'); next(); }) ;
router.post('/otherthing', function (req, res, next) { res.end('Hello'); next(); }) ;

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

