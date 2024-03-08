// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const { parseRangeHeader } = require('../utils/helpers');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

router.get('/:filename', (req, res) => {
  const { filename } = req.params;
  const params = {
    Bucket: 'space.bucket',
    Key: filename,
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Length', data.ContentLength);
    res.send(data.Body);
  });
});

module.exports = router;