const http = require("http");
const os = require("os");

let visits = 0;

const server = http.createServer((req, res) => {

visits++;

const hostname = os.hostname();

const port = process.env.PORT || 8080;

const serverIP = req.headers['x-forwarded-for'] || req.socket.localAddress;

const clientIP = req.socket.remoteAddress + ":" + req.socket.remotePort;

res.writeHead(200, {"Content-Type": "text/html"});

res.end(`
<h1>Visit Counter</h1>

<p><b>Visits:</b> ${visits}</p>

<hr>

<h2>Server Info</h2>

<p><b>Hostname:</b> ${hostname}</p>

<p><b>Port:</b> ${port}</p>

<p><b>Server IP:</b> ${serverIP}</p>

<hr>

<h2>Client Info</h2>

<p><b>IP:</b> ${clientIP}</p>
`);

});

server.listen(process.env.PORT || 8080);
