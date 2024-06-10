const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Welcome to the payment system');
});
app.listen(7865);
console.log('API available on localhost port 7865');
