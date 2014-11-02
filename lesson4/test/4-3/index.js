var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

window.onload = function() {
    var squares = [];
    //ваш код будет здесь
    // генерация квардратов
    // обработчики на клики по квадратам
    // функция смены цвета на рандомный
    // фунуция проверки одинаковые цвета
    getNumOfSquares();
    window.requestAnimationFrame(colorify);

    function colorify() {
        squares.forEach(recolor);
        window.requestAnimationFrame(colorify);
    }

    function recolor(element) {
        element.style.backgroundColor = colors[Math.round(Math.random() * colors.length - 1)];
        console.log(squares);
        if (checkEqualColors()) {
            alert('Готово!');
        }
    }

    function getNumOfSquares() {
        var num = prompt('Введите количество квадратов');
        num = +num;
        if (isNaN(+num)) {
            getNumOfSquares();
        } else {
            create(num);
        }
    }

    function create(num) {
        var curel = document.body;
        for (var i = 0 ; i < num; i++) {
            var size = (num - i) * 50;
            squares[i] = document.createElement('div');
            squares[i].style.position = 'relative';
            squares[i].style.top = 25 + 'px';
            squares[i].style.left = 25 + 'px';
            squares[i].style.width =  size + 'px';
            squares[i].style.height = size + 'px';
            squares[i].style.backgroundColor = colors[Math.round(Math.random() * colors.length - 1)];
            curel = curel.appendChild(squares[i]);
        }
    }

    function checkEqualColors() {
        var trigger = true;
        var curcol = squares[0].style.backgroundColor;
        for (var i = 0; i < squares.length; i++) {
            if (curcol != squares[i].style.backgroundColor) {
                trigger = false;
            }
        }
        return trigger;
    }
};