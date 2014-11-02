
window.onload = function() {

    var tasks = {};
    var url = "ws://jsbursa.wookieelabs.com:4600/tasks";
    var ws = new WebSocket(url);
    var i = 1;
    var listName = "";

    //при старте страницы проверяем хэш
    checkHash();
    window.onhashchange = checkHash;

    ws.onmessage = function (event) {
        handleMessage(JSON.parse(event.data));
    };

    //удалить
    $('.board-container').on('click', '.close', function () {
        var taskId = $(this).parents('.item').data('taskid');
        var stringToSend = JSON.stringify({
            taskId: taskId,
            type: 'delete',
            id: Math.round(Math.random() * 100)
        });
        ws.send(stringToSend);
        handleMessage(JSON.parse(stringToSend));
    });

    //новая задача
    $('.new form button').click(
        function () {
            var title = $('.new form .todo-title').val();
            var description = $('.new form .todo-description').val();
            if (title.length > 0 && description.length > 0) {
                var stringToSend = {
                    taskId: 'task' + i,
                    type: 'upsert',
                    title: $('.new form .todo-title').val(),
                    description: $('.new form .todo-description').val(),
                    status: 'todo',
                    id: Math.round(Math.random() * 1000)
                };
                i++;

                handleMessage(stringToSend);
                stringToSend = JSON.stringify(stringToSend);
                ws.send(stringToSend);
            } else {
                alert('Заполните поля, пазязя!');
            }
        });


    // начать работу
    $('.jumbotron button').click(
        function () {
            var name = Math.random().toString(36).slice(2);
            location.hash = name;
            ws.send(JSON.stringify({
                type: 'connect',
                id: i,
                name: name
            }));
            checkHash();
        }
    );


    //начать делать
    $('.todo').on('click', '.start',
        function () {
            var taskId = $(this).parents('.item').data('taskid');
            var toSend = {
                taskId: taskId,
                type: 'upsert',
                title: tasks[taskId].title,
                description: tasks[taskId].description,
                status: 'inprogress',
                id: Math.round(Math.random() * 1000)
            };
            i++;
            ws.send(JSON.stringify(toSend));
            handleMessage(toSend);
        }
    );


    //завершить
    $('.inprogress').on('click', '.finish',
        function () {
            var taskId = $(this).parents('.item').data('taskid');
            var toSend = {
                taskId: taskId,
                type: 'upsert',
                title: tasks[taskId].title,
                description: tasks[taskId].description,
                status: 'done',
                id: Math.round(Math.random() * 1000)
            };
            i++;
            ws.send(JSON.stringify(toSend));
            handleMessage(toSend);
        }
    );

    function handleMessage(message) {
        if (message.type == 'upsert') {
            tasks[message.taskId] = {
                title: message.title,
                status: message.status,
                description: message.description
            }
        } else if (message.type == 'delete') {
            delete tasks[message.taskId];
        }
        initialDraw(tasks);
    }


    function makeConnection() {
        ws.onopen = function () {
            ws.send(JSON.stringify({type: "connect", id: i, name: listName}));
        }
    }


    function checkHash() {
        if (location.hash.length <= 0) {
            $(".board-container").hide();
            $('.bs').show();
        } else {
            listName = location.hash.slice(1);
            $('.bs').hide();
            $(".board-container").show();
            getTasks();
            makeConnection();
        }
    }


    function getTasks() {
        var getTasksRequest = new XMLHttpRequest();
        getTasksRequest.open('GET', 'http://jsbursa.wookieelabs.com:4600/tasks?id=' + location.hash.slice(1));
        getTasksRequest.onreadystatechange = function () {
            if (this.readyState === this.DONE) {
                var response = JSON.parse(this.responseText);
                if (this.status === 200) {
                    initialDraw(response);
                } else {
                    console.log('bad responce: ' + response);
                }
            }
        };
        getTasksRequest.send();
    }


    function initialDraw(changes) {
        $('.todo').html('<h2>Делать</h2>');
        $('.inprogress').html('<h2>В Работе</h2>');
        $('.done').html('<h2>Готово</h2>');

        tasks = changes;
        var startBtn = '<p><button class="btn btn-primary start" role="button">Начать делать »</button></p>';
        var finishBtn = '<p><button class="btn btn-success finish" role="button">Завершить »</button></p>';

        $.each(tasks, function (id) {
            var taskTmp = '<div class="item" data-taskid="' + id + '">' +
                '<div class="close">' +
                '<button class="btn btn-danger" role="button">' +
                '<span class="fa fa-times"></span>' +
                '</button></div>' +
                '<h3>' + this.title + '</h3>' +
                '<p>' + this.description + '</p>' +
                '</div>';
            if (this.status === 'todo') {
                $('.todo').append(taskTmp);
            } else if (this.status === 'inprogress') {
                $('.inprogress').append(taskTmp);
            } else if (this.status === 'done') {
                $('.done').append(taskTmp);
            } else {
                alert('Unknown task ' + id + ' status ' + this.status);
            }
        });
        $('.todo > .item').append(startBtn);
        $('.inprogress > .item').append(finishBtn);
    }
};