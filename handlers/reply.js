'use strict';

module.exports.reply = (event, context, callback) => {
  if (!event.Records) {
    console.log(`event: ${event}`);
    return callback(null, 'No SNS message found.');
  }

  const Tweet = require('../lib/tweet');
  const twitterConfig = {
    consumer_key: process.env.TWIT_API_KEY,
    consumer_secret: process.env.TWIT_API_KEY_SECRET,
    access_token: process.env.TWIT_ACCESS_TOKEN,
    access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET,
    timeout_ms: process.env.TWIT_TIMEOUT_MS,
  };
  const tweet = new Tweet(twitterConfig);

  const message = event.Records[0].Sns.Message;
  console.log(`message from SNS: ${JSON.stringify(message)}`);

  // Respond to mention from event
  tweet.reply(message.tweet)
  .then((data) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Replies to tweet was sent successfully',
        data: event
      }),
    };

    callback(null, response);
  })
  .catch((error) => {
    console.log('Error executing Lambda function:', error);
  });
};
