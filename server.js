const express = require('express');
const path = require('path');
const app = express();
const PORT = 5555;

app.use(express.static(path.join(__dirname, '/client/dist')));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});