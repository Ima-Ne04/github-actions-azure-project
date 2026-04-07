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

<body>

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

</body>
</html>
`);
});

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", () => {
  console.log("Server running on port " + port);
});
