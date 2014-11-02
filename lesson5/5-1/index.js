document.querySelector('button').addEventListener('click', goWiki);

    function goWiki (event, title) {
        title = typeof title !== 'undefined' ? title : document.querySelector('input').value;
        var scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', 'http://en.wikipedia.org/w/api.php?action=parse&page=' + title + '&prop=text&section=0&format=json&callback=getWikiArticle');
        document.querySelector('head').appendChild(scriptElement);
        location.hash = title;
    }


window.onload = function() {
    window.getWikiArticle = function (data) {
        var content = document.querySelector('#content');
        try{
            content.innerHTML = data.parse.text['*'];
            content.style.fontWeight = 'bold';

        } catch (err){
            alert('Bad request');
        }


    };

    Array.prototype.in_array = function(p_val) {
        for(var i = 0, l = this.length; i < l; i++)  {
            if(this[i] == p_val) {
                return true;
            }
        }
        return false;
    };


window.onhashchange = function() {
    goWiki(false, location.hash.slice(1));
    makeHistory();
};

    function makeHistory(){
        var currenthash = location.hash;
        var historyNodesContainer = document.querySelector('.history');

        if (!localStorage.getItem('wikihistory')){
            localStorage.setItem('wikihistory', JSON.stringify([currenthash.slice(1)]));
            console.log('no history yet');
        } else {
            var histr = JSON.parse(localStorage.getItem('wikihistory'));
            console.log(histr);
            if (!histr.in_array(currenthash.slice(1))){
                histr.unshift(currenthash.slice(1));
                histr = histr.slice(0,5);
                localStorage.setItem('wikihistory', JSON.stringify(histr));
                historyNodesContainer.innerHTML = '';

                for (var i=0; i < histr.length; i++){
                    var li = document.createElement('li');
                    var link = document.createElement('a');
                    link.href = 'http://en.wikipedia.org/wiki/' + histr[i];
                    link.textContent = histr[i];
                    var historyNode = historyNodesContainer.appendChild(li);
                    historyNode.appendChild(link);
                }
            }
        }
    }
};