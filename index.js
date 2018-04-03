const http = require('http');

const name = 'node-hello-world';
const port = process.env.PORT || '3000';
const message = process.env.MESSAGE || 'Hello World';

const app = new http.Server();

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(message);
  res.end('\n');
});

app.listen(port, () => {
  console.log(`${name} is listening on port ${port}`);
});
