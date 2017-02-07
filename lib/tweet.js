'use strict';

const Twitter = require('./twit');
const _ = require('lodash');

class Tweet {
  constructor(twitterConfig) {
    this.twitter = new Twitter(twitterConfig);
  }

  // Get all mentions and filter by hastag and favorite flag
  filterMentions(hashtag) {
    return this.twitter.getMentions()
    .then((mentions) => {
      // filter by favorited flag/hashtag
      return _.filter(mentions, (m) => {
        return !m.favorited && m.text.includes(hashtag);
      });
    });
  }

  // Post reply tweets to all mentions with the correct hashtag
  reply(hashtag) {
    return this.filterMentions(hashtag)
    .then((mentions) => {
      console.log('Filtered mentions:', mentions);
      return Promise.all(_.map(mentions, (t) => {
        const replyTo = t.user.screen_name;
        const replyName = t.user.name;
        const id = t.id_str;
        // TODO: Make message random
        const text = `@${replyTo} Happy Valentine's Day ${replyName}! You're never be null in my interpreter.`;
        console.log(`Replying to @${replyTo}`);
        // favorite each tweet so we know which ones we've processed already
        return this.twitter.favoriteTweet(id)
        .then((data) => {
          return this.tweet(text);
        });
      }));
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
