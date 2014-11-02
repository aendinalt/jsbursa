window.onload = function () {
    var el1 = document.querySelector('.el1');
    var el2 = document.querySelector('.el2');
    var el3 = document.querySelector('.el3');

    document.querySelector('a').addEventListener('click', function (event) {
        el2.removeEventListener('click', func2, false);
        event.preventDefault();
    });

    var func2 = function (event) {
        alert("зеленый-всплытие");
    }

    el1.addEventListener('click', function (event) {
        alert("красный-всплытие");
    }, false);
    el2.addEventListener('click', func2, false);
    el3.addEventListener('click', function (event) {
        alert("синий-всплытие");
    }, false);

    el1.addEventListener('click', function (event) {
        alert("красный-погружение");
    }, true);
    el2.addEventListener('click', function (event) {
        alert("зеленый-погружение");
    }, true);
    el3.addEventListener('click', function (event) {
        alert("синий-погружение");
    }, true);




}