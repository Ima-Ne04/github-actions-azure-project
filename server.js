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
<!DOCTYPE html>
<html>
<head>
<title>Visit Counter</title>
</head>

<body style="font-family: serif; margin:40px;">

<h1>Visit Counter</h1>

<p><strong>Visits:</strong> ${visits}</p>

<hr>

<h2>Server Info</h2>

<p><strong>Hostname:</strong> ${hostname}</p>

<p><strong>Port:</strong> ${port}</p>

<p><strong>Server IP:</strong> ${serverIP}</p>

<hr>

<h2>Client Info</h2>

<p><strong>IP:</strong> ${clientIP}</p>

</body>
</html>
`);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
console.log("Server running");
});
