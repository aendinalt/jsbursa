angular.module('test').factory('priceService', function ($http) {

  function getPrice () {
    return $http.get('http://jsbursa.wookieelabs.com:4000/fastget');
  }

  function sell (ticket) {
    return $http.post('http://jsbursa.wookieelabs.com:4000/sell', { ticket: ticket });
  }

  return {
    getPrice: getPrice,
    sell: sell
  }

});