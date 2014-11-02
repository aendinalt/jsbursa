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

    var flyerSize = 40;
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
            balls[i].style.top = Math.round(Math.random() * 460) + 'px';
			console.log('top ' + balls[i].style.top);
			console.log('top - px ' + balls[i].style.top.slice(0, -2));
            balls[i].style.left = Math.round(Math.random() * 460) + 'px';
            balls[i].style.backgroundColor = colors[Math.round(Math.random() * colors.length - 1)];
            balls[i].angle = Math.round(Math.random() * 90);
            balls[i].speed = Math.round(Math.random() * 20);
            document.querySelector('#borders').appendChild(balls[i]);
        }
    }

    function moveBall() {
        // move
        for (var i = 0 ; i < balls.length; i++) {
			var ballTop
            balls[i].style.top = (+balls[i].style.top.slice(0, -2) + balls[i].speed * Math.cos(balls[i].angle)) + 'px';
            //console.log(balls[i].style.top[-2]);
            balls[i].style.left = (+balls[i].style.left.slice(0, -2) + balls[i].speed * Math.sin(balls[i].angle)) + 'px';
            // test
            //balls[i].testattr = colors[Math.round(Math.random() * colors.length - 1)];
            //balls[i].style.backgroundColor = balls[i].testattr;
            if (bumpFloor(balls[i].style.top.slice(0, -2))) {
                balls[i].speed *= -1;
                balls[i].angle *= -1;
                //console.log('speed: ' + speed + ',' + 'angle: ' + angle);
            }
            if (bumpWall(balls[i].style.left.slice(0, -2))) {
                balls[i].angle *= -1;
            }
        }
        window.requestAnimationFrame(moveBall);
    }

    function bumpFloor(flyerTop) {
        if (flyerTop >= borderSize - flyerSize) {
            return true;
        } else if (flyerTop <= 0) {
            return true;
        } else {
            return false;
        }
    }

    function bumpWall(flyerLeft) {
        if (flyerLeft >= borderSize - flyerSize) {
            return true;
        } else if (flyerLeft <= 0) {
            return true;
        } else {
            return false;
        }
    }

    window.requestAnimationFrame(moveBall);

};