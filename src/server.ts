// Fichier src/server.ts
import * as http from 'http';

// Port par défaut ou depuis la variable d'environnement
const port = process.env.PING_LISTEN_PORT || 3000;

const server = http.createServer((req, res) => {
  // Définir les headers de réponse pour JSON
  res.setHeader('Content-Type', 'application/json');
  
  // Vérifier si la requête est un GET sur /ping
  if (req.method === 'GET' && req.url === '/ping') {
    // Récupérer et renvoyer les headers de la requête
    const requestHeaders = req.headers;
    res.statusCode = 200;
    res.end(JSON.stringify(requestHeaders));
  } else {
    // Retourner un 404 pour toute autre requête
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});