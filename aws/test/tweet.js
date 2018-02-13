'use strict';

const assert = require('assert');
const Tweet = require('../lib/tweet');
const _ = require('lodash');

describe('tweet', () => {
  describe('instantiation', () => {
    it('make new tweet', () => {
      const tweet = new Tweet({
        consumer_key: '1234',
        consumer_secret: '1234',
        access_token: 'abcd',
        access_token_secret: 'abcd',
        timeout_ms: 1000
      }, 'abcd', '12345');

      assert(tweet.twitter);
      assert(tweet.twitter.twit);
      assert(_.isFunction(tweet.tweet));
    });
  });
});
