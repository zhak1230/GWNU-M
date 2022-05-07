const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = 'Ic00i1OgH0u8wmChTmeb';
const secret_key = '4K1YSSL11K15bdf7tMuM2MuEB0dYOVRXS33gP5Ra';

const S3 = new AWS.S3({
  endpoint: endpoint,
  region: region,
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_key,
  },
});

function setUpload(bucket) {
  var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: bucket,
      acl: 'public-read-write',
      key: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        cb(null, Date.now().toString() + extension);
      },
    }),
  });
  return upload;
}
