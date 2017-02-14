'use strict';

const _ = require('lodash');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

class Images {
  constructor() {
    this.s3Params = {
      Bucket: process.env.S3_BUCKET,
      Delimiter: '/',
    };
  }

  getRandomFileUrl() {
    return new Promise((resolve, reject) => {
      return s3.listObjects(this.s3Params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
          return reject(new Error(err));
        }
        // data.Contents = Array<map>
        const contents = data.Contents || [];
        const random = _.sample(contents) || {};
        // TODO: ensure key is a valid file
        const url = `https://s3.amazonaws.com/${this.s3Params.Bucket}/${random.Key}`;
        return resolve(url);
      });
    });
  }
}

module.exports = Images;
