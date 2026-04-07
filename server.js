const express = require("express");
const app = express();

let counter = 0;

app.use(express.static(__dirname));

app.get("/counter", (req, res) => {
counter++;
res.send(counter.toString());
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log("Server running");
});
