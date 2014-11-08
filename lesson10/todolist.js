angular.module('todoListApp', [])
    .controller('TodoController', ['$scope', function($scope) {
/*
        $scope.tasks = {
            todo:{
                1: {id: 1, title: 'task1', description: 'this is task 1'}
            },
            inprogress: {},
            done: {}
        };
*/

        $scope.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

    }]);