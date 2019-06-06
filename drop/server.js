const fs = require('fs');
const http = require('http');
const url = require('url');

const index = fs.readFileSync('./index.html');
const style = fs.readFileSync('./src/style.css');
const dataFile = fs.readFileSync('./src/data.json');
const script = fs.readFileSync('./dist/main.js');

const hostname = 'localhost';
const port = 8080;

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log(pathname)

    if(pathname === '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(index);
    }
    else if(pathname.includes('style.css')) {
        res.writeHead(200, {"Content-Type": "text/css"});
        res.end(style);
    }
    else if(pathname.includes('main.js')){
        res.writeHead(200, {"Content-Type": "application/javascript"});
        res.end(script);
    }
    else if(pathname.includes('data.json')) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(dataFile);
    }
}).listen(port, hostname);