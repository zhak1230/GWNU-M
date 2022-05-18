var express = require('express');
var router = express.Router();

const { User } = require('../Model/User');
const { Counter } = require('../Model/Counter');

router.post('/register', (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: 'counter' })
    .then((doc) => {
      temp.userNum = doc.userNum;
      // console.log(req.body);
      const userData = new User(temp);
      userData.save().then(() => {
        Counter.updateOne({ name: 'counter' }, { $inc: { userNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

router.post('/namecheck', (req, res) => {
  User.findOne({ displayName: req.body.displayName })
    .exec()
    .then((doc) => {
      let check = true;
      if (doc) {
        check = false;
      }
      res.status(200).json({ success: true, check });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

module.exports = router;
