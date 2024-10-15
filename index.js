const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {

    if (req.url === '/signup' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'HTML', 'signup.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.end(data);
            }
        });
        return;
    }

    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(`Received Data: ${body}`);
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end("Form Submission Successful");
        });
        return;
    }

    let filePath = path.join(__dirname, 'HTML', req.url === '/' ? 'video-page.html' : req.url);

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.mp4':
            contentType = 'video/mp4';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        default:
            contentType = 'text/html';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-type': 'text/plain' });
                res.end('Page not Found');
            } else {
                res.writeHead(500, { 'Content-type': 'text/plain' });
                res.end('Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-type': contentType });
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`The Site is Live now on http://${hostname}:${port}`);
});
