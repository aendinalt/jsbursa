var http = require('http');
var url = require('url');
var fs = require('fs');

function run(){
    var server = http.createServer();
    server.on('request', function(request, response){
        var filename = url.parse(request.url).path.slice(1);

        fs.readFile('static/' + filename, function (err, data) {
            if (err) {
                response.writeHead(404);
                response.end('Can\'t read the file');
            } else {
                response.writeHead(200);
                response.end(data.toString());
            }

        });



    });
    server.listen(9999, function(){

    });
}

run();

if (!module.parent) { module.exports.run = run; } else { run(); }