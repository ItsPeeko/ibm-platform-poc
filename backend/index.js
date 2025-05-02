const express = require('express');
const app = express();
const version = process.env.VERSION || 'v1';

app.get('/api/version', (req, res) => {
  res.json({ version, timestamp: Date.now() });
});

app.get('/api/data', (req, res) => {
  setTimeout(() => {
    res.json({ data: [1, 2, 3], servedBy: version });
  }, 100);
});

app.listen(3000, () => {
  console.log(`Backend running on port 3000 — version ${version}`);
});

