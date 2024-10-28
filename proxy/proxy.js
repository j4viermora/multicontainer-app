const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 80;

// Redirigir las peticiones al front o al back según la ruta
app.use('/api', createProxyMiddleware({ target: 'http://backend:3000', changeOrigin: true }));
app.use('/v2', createProxyMiddleware({ target: 'http://frontend-react:80', changeOrigin: true }));
app.use('/', createProxyMiddleware({ target: 'http://frontend:80', changeOrigin: true }));

app.listen(PORT, () => {
  console.log('Proxy listening on port http://localhost:' + PORT);
});
