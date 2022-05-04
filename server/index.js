const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '../client/build')));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, '../client/build/index.html'));
});
