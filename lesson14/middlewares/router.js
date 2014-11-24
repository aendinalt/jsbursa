function Router () {
  this.rules = [];
}

Router.prototype.handle = function (err, req, res, next) {
/* 
  Логика обработки middleware
  Мне пришлось модифицировать happy чтобы в middlewares можно было передавать не только
  функцию, но и объект. При этом в объекте движок happy будет искать метод handle,
  так что вся логика работы роутера будет здесь
*/
};

Router.prototype.get = function (url, fn) {
};


Router.prototype.post = function (url, fn) {
};


module.exports = Router;

