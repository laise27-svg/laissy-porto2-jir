const http = require('http');

const PORT = process.env.PORT || 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js App Sederhana</title>
      <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
        h1 { color: #333; }
        p { color: #666; }
      </style>
    </head>
    <body>
      <h1>Halo Dunia! 🚀</h1>
      <p>Ini adalah aplikasi Node.js sederhana yang siap untuk di-hosting.</p>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
