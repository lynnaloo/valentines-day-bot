'use strict';

const Twit = require('twit');
const https = require('https');
const fs = require('fs');

class Twitter {
  constructor(config) {
    this.twit = new Twit(config);
  }

  // Returns all mentions for current user
  getMentions() {
    return new Promise((resolve, reject) => {
      return this.twit.get('statuses/mentions_timeline', (err, data, response) => {
        if (err) {
          return reject(new Error(err));
        }
        return resolve(data);
      });
    });
  }

  favoriteTweet(id) {
    return new Promise((resolve, reject) => {
      return this.twit.post('favorites/create', { id: id, include_entities: false}, (err, data, response) => {
        if (err) {
          return reject(new Error(err));
        }
        console.log('Favorited Tweet', id);
        return resolve(data);
      });
    });
  }

  // Post a status with or without media
  postStatus(text, mediaIds) {
    return new Promise((resolve, reject) => {
      const params = {
        status: text,
        media_ids: mediaIds
      };
      return this.twit.post('statuses/update', params, (err, data, response) => {
        if (err) {
          return reject(new Error(err));
        }
        return resolve(data);
      });
    });
  }

  uploadImage(imageUrl) {
    return new Promise((resolve, reject) => {
      const file = fs.createWriteStream('/tmp/happy-photo.jpg');
      return https.get(imageUrl, (response) => {
        response.pipe(file);
        response.on('end', () => {
          console.log('Downloaded image from url');
          const b64content = fs.readFileSync('/tmp/happy-photo.jpg', { encoding: 'base64' });
          return this.twit.post('media/upload', { media_data: b64content }, (err, media, response) => {
            if (err) {
              console.log('Problem uploading image', err);
              return resolve([]);
            }
            return resolve([media.media_id_string]);
          });
        });
      });
    });
  }

  tweet(text, imageUrl) {
    if (imageUrl) {
      console.log('Creating a tweet with an image');
      return this.uploadImage(imageUrl)
      .then((mediaIds) => {
        return this.postStatus(text, mediaIds);
      });
    }
    console.log('Creating a tweet (no media)');
    return this.postStatus(text, []);
  }
}

module.exports = Twitter;
