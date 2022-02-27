const http = require('http');

const hostname = '0.0.0.0';
const port = 8666;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('AWS test server made with node, if you recieve this message im working!!!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});