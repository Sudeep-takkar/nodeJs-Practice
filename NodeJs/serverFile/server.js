var http = require('http');
var fs = require('fs');


function send404Response(response){
    response.writeHead(404,{"Content-Type": "text/plain"});
    response.write("Error 404: page not found");
}

function onRequest(request, response) {

    if(request.method == 'GET' && request.url == '/in'){
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }else {
        send404Response(response);
    }
}


http.createServer(onRequest).listen(8888);
console.log("server is running....");

