angular.module('test').controller('PriceCtrl', function ($scope, $timeout, priceService) {
  $scope.price = 300;
  $scope.sellAmount = 400;

  $scope.graphbars = [];
  var counter = 0;

  var ticket;

  function getPrice () {
    priceService.getPrice().then(function (response) {
      $scope.price = response.data.price;
      $scope.graphbars[counter++] = {
        height: $scope.price + 'px'
      } ;

      if (counter === 10) {
        counter = 0;
      }

      ticket = response.data.ticket;
      $timeout(getPrice, 0);
    });
  }

  getPrice();


  for (var i = 0; i < 10; i++) {
    $scope.graphbars.push({});
  }

  $scope.sell = function () {
    priceService.sell(ticket).then(function () {
      $scope.sellAmount += $scope.price;
    }, function () {
      alert('Продажа не удалась!');
    });
  }

});
