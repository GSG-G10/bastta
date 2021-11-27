const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const uploadFile = async (name, image) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: name,
    Body: image,
  };
  const imageUploaded = await s3.upload(params).promise();
  return imageUploaded;
};

module.exports = uploadFile;
