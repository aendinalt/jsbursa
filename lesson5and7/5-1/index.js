document.querySelector('button').addEventListener('click', function () {
    //ваш код располагается здесь
    var title = document.querySelector('input').value;
    var scriptElement = document.createElement('script');
    scriptElement.setAttribute('src', 'http://en.wikipedia.org/w/api.php?action=parse&page=' + title + '&prop=text&section=0&format=json&callback=getWikiArticle');
    document.querySelector('head').appendChild(scriptElement);
    console.log(document.querySelector('head'));


    console.log(title);

});

window.onload = function() {
    window.getWikiArticle = function (data) {
        console.log(data);
        console.log(typeof data);
        var content = document.querySelector('#content');
        content.innerHTML = data.parse.text['*'];
        content.style.fontWeight = 'bold'

    }

};