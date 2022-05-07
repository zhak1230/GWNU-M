var express = require('express');
var router = express.Router();
const multer = require('multer');

const { Post } = require('../Model/Post');
const { Counter } = require('../Model/Counter');

const setUpload = require('../Util/upload');

router.post('/submit', (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: 'counter' })
    .then((counter) => {
      temp.postNum = counter.postNum;
      // console.log(temp);
      const CommunityPost = new Post(temp);
      CommunityPost.save().then(() => {
        Counter.updateOne({ name: 'counter' }, { $inc: { postNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post('/list', (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post('/detail', (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post('/edit', (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

router.post('/delete', (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

/*
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage }).single('file');

router.post('/image/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      // console.log(err);
      res.status(400).json({ success: false });
    } else {
      res.status(200).json({ success: true, filePath: res.req.file.path });
    }
  });
});
*/

router.post(
  '/image/upload',
  setUpload('gwnu-community/post'),
  (req, res, next) => {
    console.log(res.req);
    res.status(200).json({ success: true, filePath: res.req.file.location });
  }
);

module.exports = router;
