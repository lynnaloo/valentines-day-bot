# Valentine's Day Bot

> :heart: :cat:
>
> Tweets a special reply to mentions using the correct #hashtag.
>
> Uses Serverless framework and AWS Lambda.

[![Made with Serverless](https://img.shields.io/badge/serverless-⚡-yellow.svg?style=flat-square)](https://serverless.io)
[![Norfolk JS Inspired](https://img.shields.io/badge/NorfolkJS-inspired-f3df49.svg?style=flat-square)](https://norfolkjs.org)

## Try it out

Mention `@thesecatstweet` in a tweet and don't forget the hashtag `#valentinebot`.

## About

This is a demonstration project for Serverless bots inspired by other useful bots
and other cute bots.

*   The `handleMentions` function does scheduled polling of mentions to perform replies
    (if you want a :100: Serverless application)
*   The `reply` function performs just the favoriting and reply to a mention
    (can be called by the Twitter Streams API)

## Install

With [node](https://nodejs.org/) installed, install the Serverless Architecture:

```
$ npm i -g serverless
$ npm i -g serverless-azure-functions
$ npm i -g yarn
```

Clone this repository

```
$ git clone git@github.com:lynnaloo/valentines-day-bot.git
```

Install dependencies 

```
$ cd azure
$ yarn install
```

## Setup and Testing

Setup your Account Provider and Credentials
*   [Azure Cloud account credentials](https://serverless.com/framework/docs/providers/azure/guide/credentials/) 
*   [AWS account credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials)

Add your images storage bucket and Twitter Credentials

* Create a file called `env.json` with these contents:

```
{
  "TWIT_API_KEY": "xxxxxxx",
  "TWIT_API_KEY_SECRET": "xxxxxxx",
  "TWIT_ACCESS_TOKEN": "xxxxx",
  "TWIT_ACCESS_TOKEN_SECRET": "xxxxxxx",
  "TWIT_TIMEOUT_MS": 60000,
  "TWIT_HASHTAG": "#happyvalentinebot",
  "BUCKET": "bucket-o-gifs"
}
```

Run Unit Tests

```
npm test
```

Test Function locally

```
serverless invoke local -l -f handleMentions
```

## Deployment

Deploy Functions

```
$ sls deploy -v
```

## See Also

*   [Serverless Framework](http://www.serverless.com)
*   [Adopt-a-Pet Bot](https://github.com/lynnaloo/adoptable-pet-bot)
*   [Rachel's Cute Bot](https://github.com/rachelnicole/magicalncute)

## License

MIT
