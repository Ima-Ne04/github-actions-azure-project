const express = require("express");
const app = express();

let visits = 0;

app.get("/", (req, res) => {

visits++;

const hostname = req.hostname;
const port = process.env.PORT || 8080;
const serverIP = req.socket.localAddress;
const clientIP = req.socket.remoteAddress + ":" + req.socket.remotePort;

res.send(`
Visit Counter
<br><br>

Visits: ${visits}
<br><br>

<hr>

<h3>Server Info</h3>

Hostname: ${hostname}
<br><br>

Port: ${port}
<br><br>

Server IP: ${serverIP}

<hr>

<h3>Client Info</h3>

IP: ${clientIP}

`);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
console.log("Server running");
});
