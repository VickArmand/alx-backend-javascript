const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Welcome to the payment system');
});
app.get('/cart/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`Payment methods for cart ${req.params.id}`);
  }
  else {
    res.statusCode = 404;
    res.end('Id must be int');
  }
});
app.listen(7865);
console.log('API available on localhost port 7865');
