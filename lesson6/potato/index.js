window.onload = function() {

    var divPrice = document.querySelector('#price');
    var divSell = document.querySelector('#sells');
    var timeout = 0;

    serverAsking();

    function serverAsking() {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://10.42.0.1:3000/fastget', true);
        request.send();
        console.log('here');
        request.onreadystatechange = function() {
            checkStatus(request);
        }
    }

    function checkStatus(request) {
        if (request.readyState === request.DONE) {
            if(request.status === 200) {
                var obj = JSON.parse(request.responseText);
                divPrice.textContent = obj.price;
                if (obj.price > 200) {
                    var reqsell = new XMLHttpRequest();
                    reqsell.open('POST', 'http://10.42.0.1:3000/sell', true);
                    reqsell.send(JSON.stringify({ticket : obj.ticket}));
                    reqsell.onreadystatechange = function() {
                        if (reqsell.readyState === reqsell.DONE) {
                            if(reqsell.status === 200) {
                                divSell.innerHTML += '+ Price: ' + obj.price + ' Lag: ' + JSON.parse(reqsell.responseText).lag + '<BR/>'
                            } else {
                                divSell.innerHTML += 'X ' + '<BR/>'
                            }
                        }
                    }
                }


            } else if(request.status === 403) {
                timeout = JSON.parse(request.responseText).sellLimit;
                //console.log(timeout);
               // debugger;
            }
            setTimeout(serverAsking, timeout);
        }
    }
};