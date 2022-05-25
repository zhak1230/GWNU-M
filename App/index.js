const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const congfig = require('./server/Config/key');

// mongodb+srv://zhak1230:dnjsdud12@@cluster0.qo0ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, './client/build')));
app.use('/image', express.static('./image'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/post', require('./server/Router/post'));
app.use('/api/user', require('./server/Router/user'));
app.use('/api/reple', require('./server/Router/reple'));

app.listen(port, () => {
  mongoose
    .connect(congfig.mongoURI)
    .then(() => {
      console.log(`Example app listening at http://localhost:${port}`);
      console.log('Connecting MongoDB...');
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get('/', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.get('*', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, './client/build/index.html'));
});
