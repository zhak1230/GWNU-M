const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// mongodb+srv://zhak1230:dnjsdud12@@cluster0.qo0ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require('./Model/Post');

app.listen(port, () => {
  mongoose
    .connect(
      'mongodb+srv://zhak1230:dnjsdud639@cluster0.qo0ws.mongodb.net/Community?retryWrites=true&w=majority'
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

app.post('/api/post/submit', (req, res) => {
  let temp = req.body;
  // console.log(temp);
  const CommunityPost = new Post(temp);
  CommunityPost.save()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post('/api/post/list', (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});
