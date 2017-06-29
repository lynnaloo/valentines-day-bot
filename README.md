# Valentine's Day Bot

> :heart: :cat:
>
> Tweets a special reply to mentions using the correct #hashtag.
>
> Uses Serverless framework and AWS Lambda.

[![Made with Serverless](https://img.shields.io/badge/serverless-⚡-yellow.svg?style=flat-square)](https://serverless.io)
[![Norfolk JS Inspired](https://img.shields.io/badge/NorfolkJS-inspired-f3df49.svg?style=flat-square)](https://norfolkjs.org)

## Try it out

Mention `@thesecatstweet` in a tweet and don't forget the hashtag `#happyvalentinebot`.

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
```

Clone this repository

```
$ git clone git@github.com:lynnaloo/valentines-day-bot.git
```

Install dependencies

```
$ npm i
```

## Setup and Testing

Setup your Account Provider and Credentials

*   [AWS Lambda](https://serverless.com/framework/docs/providers/aws/setup)
*   [AWS account credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials)

Run Unit Tests

```
npm test
```

Test Lambda Function locally

```
serverless invoke local -l -f handleMentions
```

## Deployment

Deploy Lambda Functions

```
$ sls deploy -v
```

## See Also

*   [Serverless Framework](http://www.serverless.com)
*   [Adopt-a-Pet Bot](https://github.com/lynnaloo/adoptable-pet-bot)
*   [Rachel's Cute Bot](https://github.com/rachelnicole/magicalncute)

## License

MIT
