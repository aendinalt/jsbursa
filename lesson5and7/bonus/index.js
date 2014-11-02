var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

window.onload = function() {
    var balls = [];
    getNumOfBalls();
    var borders = document.querySelector('#borders');
    borders.addEventListener('click', moveBall);


    var borderSize = 500;



// createBalls
    function getNumOfBalls() {
        var num = prompt('Number of balls?');
        num = +num;
        if (isNaN(+num)) {
            getNumOfBalls();
        } else {
            create(num);
        }
    }

    function create(num) {
        for (var i = 0 ; i < num; i++) {
            balls[i] = document.createElement('div');
            balls[i].className = 'flyer';
            balls[i].style.top = Math.round(Math.random() * 400) + 'px';
            balls[i].style.left = Math.round(Math.random() * 400) + 'px';
            balls[i].style.backgroundColor = colors[Math.round(Math.random() * colors.length - 1)];
            balls[i].angle = Math.round(Math.random() * 90);
            balls[i].speed = Math.round(Math.random() * 10);
            balls[i].style.height = Math.round((0.5 + Math.random()) * 40) + 'px';
            balls[i].size = parseInt(balls[i].style.height.slice(0, -2));
            balls[i].style.width = balls[i].size + 'px';
            balls[i].style.borderRadius = balls[i].size / 2 + 'px';
            document.querySelector('#borders').appendChild(balls[i]);
        }
    }

// move balls
    function moveBall() {
        // move
        for (var i = 0 ; i < balls.length; i++) {
            balls[i].style.top = (+balls[i].style.top.slice(0, -2) + balls[i].speed * Math.cos(balls[i].angle)) + 'px';
            balls[i].style.left = (+balls[i].style.left.slice(0, -2) + balls[i].speed * Math.sin(balls[i].angle)) + 'px';

            if (bumpFloor(balls[i])) {
                balls[i].speed *= -1;
                balls[i].angle *= -1;
                balls[i].style.top = +balls[i].style.top.slice(0, -2) +  balls[i].speed * Math.cos(balls[i].angle) + 1 + 'px';
                balls[i].style.left = +balls[i].style.left.slice(0, -2)  +  balls[i].speed * Math.sin(balls[i].angle) + 1 + 'px';
            }
            if (bumpWall(balls[i])) {
                balls[i].angle *= -1;
            }
        }

        collision();

        window.requestAnimationFrame(moveBall);
    }

//check bumps
    function bumpFloor(curBall) {
        var flyerTop = parseInt(curBall.style.top.slice(0, -2));

        if (flyerTop >= borderSize - curBall.size - 2) {
            return true;
        } else if (flyerTop <= 2) {
            return true;
        } else {
            return false;
        }
    }

    function bumpWall(curBall) {
        var flyerLeft = parseInt(curBall.style.left.slice(0, -2));
        if (flyerLeft >= borderSize - curBall.size - 2) {
            return true;
        } else if (flyerLeft <= 2) {
            return true;
        } else {
            return false;
        }
    }

    function collision() {
        for (var j = 0 ; j < balls.length; j++) {
            var curBall = balls[j];
            for (var i = 0; i < balls.length; i++) {
                if (balls.indexOf(curBall) != i) {
                    var x1 = parseInt(curBall.style.left.slice(0, -2)) + curBall.size / 2;
                    var y1 = parseInt(curBall.style.top.slice(0, -2)) + curBall.size / 2;
                    var x2 = parseInt(balls[i].style.left.slice(0, -2)) + balls[i].size / 2;
                    var y2 = parseInt(balls[i].style.top.slice(0, -2)) + balls[i].size / 2;
                    var dx = x1 - x2;
                    var dy = y1 - y2;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < ((curBall.size + balls[i].size) / 2)) {
                        console.log('balls bump detected');
                        ballsBump(curBall, balls[i]);
                    }
                }
            }
        }
    }

    function ballsBump(ball1, ball2) {

        var tmp = 0;
        tmp = ball1.speed;
        ball1.speed = ball2.speed;
        ball2.speed = tmp;

        tmp = ball1.angle;
        ball1.angle = ball2.angle;
        ball2.angle = tmp;

        ball1.style.top = +ball1.style.top.slice(0, -2) +  ball1.speed * Math.cos(ball1.angle) + 'px';
        ball1.style.left = +ball1.style.left.slice(0, -2)  +  ball1.speed * Math.sin(ball1.angle) + 'px';

        ball2.style.top = +ball2.style.top.slice(0, -2)  +  ball2.speed * Math.cos(ball2.angle) + 'px';
        ball2.style.left = +ball2.style.left.slice(0, -2)  +  ball2.speed * Math.sin(ball2.angle) + 'px';

    }


    //window.requestAnimationFrame(moveBall);

};