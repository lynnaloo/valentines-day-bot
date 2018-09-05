'use strict';

module.exports.replyToTweets = (event, context, callback) => {
  const Tweet = require('../lib/tweet');
  const twitterConfig = {
    consumer_key: process.env.TWIT_API_KEY,
    consumer_secret: process.env.TWIT_API_KEY_SECRET,
    access_token: process.env.TWIT_ACCESS_TOKEN,
    access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET,
    timeout_ms: process.env.TWIT_TIMEOUT_MS
  };
  const tweet = new Tweet(twitterConfig);

  tweet.replyToMentions(process.env.TWIT_HASHTAG || '#valentinebot')
  .then((data) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Replies to mentions were sent successfully',
        data: event
      })
    };

    callback(null, response);
  })
  .catch((error) => {
    console.log('Error executing Lambda function:', error);
  });
};
