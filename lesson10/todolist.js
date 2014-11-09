angular.module('todoListApp', [])
    .controller('TodoCtrl', ['$scope', '$http', function($scope, $http) {
        var boardName = 'aen';



        function getTasks() {
            $http.get('http://jsbursa.wookieelabs.com:4600/tasks?id=' + boardName).
                success(function(data, status, headers, config) {
                    $scope.tasksData = data;
                    parseTasks(data);
                }).
                error(function(data, status, headers, config) {
                    console.log('Error: ' + data)
                });
        }

        function parseTasks(data){
            $scope.tasks = {
                todo: [],
                inprogress: [],
                done: []
            };
            angular.forEach(data, function(task, id){
                task.id = id;

                if (task.status == 'todo'){
                    $scope.tasks.todo.push(task)
                } else if (task.status == 'inprogress') {
                    $scope.tasks.inprogress.push(task)
                } else if (task.status == 'done'){
                    $scope.tasks.done.push(task)
                } else {
                    console.log("Bad status! " + task.status);
                }

            });
        }

        $scope.closeTask = function(id){
            delete $scope.tasksData[id];
            parseTasks($scope.tasksData);
        };

        $scope.startWork = function(id) {
            $scope.tasksData[id].status = 'inprogress';
            parseTasks($scope.tasksData);
        };

        $scope.finishWork = function(id) {
            $scope.tasksData[id].status = 'done';
            parseTasks($scope.tasksData);
        };

        $scope.newTask = function(title, description) {
            var newtask = {
                title: title,
                description: description,
                status: 'todo'
            };
            var newId = 'Task' + Math.round(Math.random()*1000000);
            $scope.tasksData[newId] = newtask;
            parseTasks($scope.tasksData);
        };

        getTasks();

    }]);