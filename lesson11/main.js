angular.module('task12', []);

angular.module('task12').controller('MainCtrl', ['$scope', 'loginService', function ($scope, loginService) {
    $scope.authResult = '';
    $scope.login = function () {
        loginService.login('test', 'jsbursa').then(function (answer) {
            $scope.authResult = answer;
        });
    }
}]);

angular.module('task12').factory('loginService', ['transportService', function (transportService) {
    var superSecretKey = 'secretkey';
    return {
        login: function (username, password) {

            //Здесь разрешено писать ваш  код
            // открыть вебсокет
            // отправить на сервер {login: xxxx, password: xxxxx}
            // получить от сервера seed
            var objToSend = {login: username, password: password};

            var seed =  transportService.send(objToSend).then(function(message){
                console.log(message.seed);
                return message.seed;
            });


            return transportService.send({seed: seed+superSecretKey}).then(function(message){
               console.log(message);
            });

            // отправить на сервер {seed: seed+superSecretKey}
            // получить от сервера authLogin
            // return authLogin
        }
    };
}]);

angular.module('task12').factory('transportService', ['$q', function ($q) {
    var URL = 'ws://jsbursa.wookieelabs.com:4000/login';
    var ws = null;

    function getConnectedWebSocket() {
        //Здесь разрешено писать ваш код
        var deferred = $q.defer();
        if (!ws){
            ws = new WebSocket(URL);
        }

        ws.onopen = function(){
            deferred.resolve(ws);
        };

        ws.onclose =  function(){
            ws = new WebSocket(URL);
            deferred.resolve(ws);
        };

        return deferred.promise;

    }

    function sendMessage (message) {
        var deferred = $q.defer();
        var message = JSON.stringify(message);
        getConnectedWebSocket().then(function (socket) {
            //Здесь разрешено писать ваш код
            socket.send(message);
            socket.onmessage = function(message){
                console.log(message);
                var data = JSON.parse(message.data);
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }

    return {
        send: sendMessage
    };
}]);



