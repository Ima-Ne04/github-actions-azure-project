const express = require('express');
const fs = require('fs');
const os = require('os');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const counterFile = path.join(__dirname, 'counter.json');

function readCounter() {
try {
const data = fs.readFileSync(counterFile, 'utf8');
return JSON.parse(data).count || 0;
} catch {
return 0;
}
}

function saveCounter(count) {
fs.writeFileSync(counterFile, JSON.stringify({ count }), 'utf8');
}

let visitCount = readCounter();

app.get('/', (req, res) => {

visitCount++;
saveCounter(visitCount);

const hostname = os.hostname();
const serverIP = req.socket.localAddress;
const clientIP =
  req.headers['x-forwarded-for']?.split(',')[0] ||
  req.socket.remoteAddress;

const clientPort = req.socket.remotePort;const clientPort = req.socket.remotePort;

res.send(`

  <h1>Visit Counter</h1>

  <h3>Visits: ${visitCount}</h3>
  <hr>

  <h2>Server Info</h2>
  <p><b>Hostname:</b> ${hostname}</p>
  <p><b>Port:</b> ${port}</p>
  <p><b>Server IP:</b> ${serverIP}</p>

  <hr>

  <h2>Client Info</h2>
  <p><b>IP:</b> ${clientIP}:${clientPort}</p>
  `);

});

app.listen(port, () => {
console.log("Server running on port " + port);
});
