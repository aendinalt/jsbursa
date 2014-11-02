var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

window.onload = function() {
    //ваш код будет здесь
    // обработчики на клики по квадратам
    // функция смены цвета на рандомный
    // фунуция проверки одинаковые цвета
    var sq1 = document.querySelector('.el1');
    var sq2 = document.querySelector('.el2');
    var sq3 = document.querySelector('.el3');
    init();
    // event listeners
    sq1.addEventListener('click', changeColor);
    sq2.addEventListener('click', changeColor);
    sq3.addEventListener('click', changeColor);

    function init() {
        sq1.curclor = getComputedStyle(sq1).backgroundColor;
        sq2.curcolor = getComputedStyle(sq2).backgroundColor;
        sq3.curcolor = getComputedStyle(sq3).backgroundColor;
    }

    function changeColor(event) {
        event.stopPropagation();
        this.style.backgroundColor = colors[Math.round(Math.random() * colors.length - 1)];
        this.curcolor = getComputedStyle(this).backgroundColor;
        checkEqualColors();
    }

    function checkEqualColors() {
        console.log(sq1.curcolor);
        console.log(sq2.curcolor);
        console.log(sq3.curcolor);
        if (sq1.curcolor == sq2.curcolor && sq2.curcolor == sq3.curcolor) {
            alert('Готово');
        }
    }
};