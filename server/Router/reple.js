var express = require('express');
var router = express.Router();
const { Post } = require('../Model/Post.js');
const { Reple } = require('../Model/Reple.js');
const { User } = require('../Model/User.js');

router.post('/submit', (req, res) => {
  let temp = {
    reple: req.body.reple,
    postId: req.body.postId,
  };

  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      temp.author = userInfo._id;
      const NewReple = new Reple(temp);
      NewReple.save(() => {
        Post.findOneAndUpdate(
          {
            _id: req.body.postId,
          },
          { $inc: { repleNum: 1 } }
        )
          .exec()
          .then(() => {
            return res.status(200).json({ success: true });
          });
      });
    })
    .catch((err) => {
      return res.status(400).json({ success: false });
    });
});

module.exports = router;
