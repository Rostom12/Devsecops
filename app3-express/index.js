const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('App3 Express accessible via reverse proxy');
});

app.listen(8080, () => {
  console.log('App3 Express écoute sur le port 8080');
});
