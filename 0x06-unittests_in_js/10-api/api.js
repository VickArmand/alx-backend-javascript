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
app.get('/available_payments', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  const response = JSON.stringify({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
  res.end(response);
});
app.post('/login', (req, res) => {
  console.log(req)
  const username = req.body.userName
  if (username) {
    res.statusCode = 200;
    res.send(`Welcome ${username}`);
  }
  res.statusCode = 403;
  res.end();
});
app.listen(7865);
console.log('API available on localhost port 7865');
