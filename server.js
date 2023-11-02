const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);

  res.end("Heloo");
});

const port = 7000;
server.listen(port, () => console.log(`server already running on ${port}`));
