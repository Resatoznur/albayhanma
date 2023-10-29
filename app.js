

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('MERHABA BEN REŞAT OZNUR GEYİK!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor.`);
});
