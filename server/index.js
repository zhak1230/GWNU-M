const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// mongodb+srv://zhak1230:dnjsdud12@@cluster0.qo0ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  mongoose
    .connect(
      'mongodb+srv://zhak1230:dnjsdud639@cluster0.qo0ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log(`Example app listening at http://localhost:${port}`);
      console.log('Connecting MongoDB...');
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get('/', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/api/test', (요청, 응답) => {
  console.log(요청.body);
  응답.status(200).json({ success: true, text: '안녕하세요' });
});
