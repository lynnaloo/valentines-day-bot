'use strict';

const Twitter = require('./twit');
const responses = require('./responses');
const _ = require('lodash');

class Tweet {
  constructor(twitterConfig) {
    this.twitter = new Twitter(twitterConfig);
  }

  // Get all mentions and filter by hastag and favorite flag
  getMentions(hashtag) {
    return this.twitter.getMentions()
    .then((mentions) => {
      // filter by favorited flag/hashtag
      return _.filter(mentions, (m) => {
        return !m.favorited && m.text.includes(hashtag);
      });
    });
  }

  // Post reply tweets to all mentions with the correct hashtag
  replyToMentions(hashtag) {
    return this.getMentions(hashtag)
    .then((mentions) => {
      console.log('Filtered mentions:', mentions);
      return Promise.all(_.map(mentions, (t) => {
        return this.reply(t);
      }));
    });
  }

  reply(tweet) {
    const replyTo = tweet.user.screen_name;
    const replyName = tweet.user.name;
    const id = tweet.id_str;
    const text = _.sample(responses);

    console.log(`Replying to @${replyTo}`);
    // TODO: Make message random
    const message = `@${replyTo} Hey ${replyName}, ${text}`;

    // favorite each tweet so we know which ones we've processed already
    return this.twitter.favoriteTweet(id)
    .then((data) => {
      return this.tweet(message);
    });
  }

  tweet(text) {
    console.log('Preparing to tweet');
    // TODO: make this a random photo from S3
    const photoUrl = 'https://s3.amazonaws.com/valentines-day-bot-images/cat-box-valentine.jpg';
    return this.twitter.tweet(text, photoUrl)
    .then((data) => {
      console.log('Reply sent successfully');
      return data;
    });
  }
}

module.exports = Tweet;
