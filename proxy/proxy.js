const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Redirigir las peticiones al front o al back según la ruta
app.use('/api', createProxyMiddleware({ target: 'http://backend:3000', changeOrigin: true }));
app.use('/', createProxyMiddleware({ target: 'http://frontend:80', changeOrigin: true }));

app.listen(80, () => {
  console.log('Proxy listening on port http://localhost:8080');
});
