window.onload = function() {

    var divPrice = document.querySelector('.value');
    var divSell = document.querySelector('.sellAmount');
    var btnSell = document.querySelector('button');
    var graphNodes = document.querySelectorAll('.graphbar');
    var ticket = 0;
    var price = 0;
    var i = 0;


    btnSell.onclick = makeSell;

    function makeSell() {
        var request = new XMLHttpRequest();
        request.open('POST', 'http://178.62.210.97:4000/sell');
        request.send(JSON.stringify({ticket: ticket}));
        request.onreadystatechange = function() {
            if (request.readyState === request.DONE) {
                var responce = JSON.parse(request.responseText);
                if(request.status === 200) {
                    if (responce.success) {
                        divSell.textContent = (parseInt(divSell.textContent) + Math.round(price)).toString();
                    } else {
                        alert(responce.reason);
                    }
                } else {
                    alert(responce.reason);
                }
            }
        }
    }



    function updatePrice() {
        var ws = new WebSocket("ws://178.62.210.97:4000/ws");
        ws.onmessage = function(evt) {
            var message = JSON.parse(evt.data);
            //console.log(message);
            if (message.success === true){
                price = message.price;
                ticket = message.ticket;
                divPrice.textContent = price;
                graphNodes[i].style.height = price + 'px';
                i++;
                if (i >= 10){
                    i = i % 10;
                }

                if (price > 200) {
                    divPrice.style.color = 'green';
                } else {
                    divPrice.style.color = 'red';
                }
            }
        }
    }

    updatePrice();

};