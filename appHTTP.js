const http = require("http");

const server = http.createServer(function (req, res) {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World ....!');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

  });

const port = 3000;
server.listen(port);

console.log(`Start at port ${port}`);