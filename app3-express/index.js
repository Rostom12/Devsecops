const express = require('express');
const app = express();
const path = require('path');

// Middleware pour servir des fichiers statiques (CSS, images, JS si besoin)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // Envoie une page HTML simple
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <title>App3 Express</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background: white;
          padding: 2rem 3rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Bienvenue sur App3 Express !</h1>
        <p>Accessible via reverse proxy.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log('App3 Express écoute sur le port 8080');
});
