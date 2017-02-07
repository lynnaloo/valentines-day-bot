# Valentine's Day Bot

> :heart: :cat:
>
> Tweets a special reply to mentions using the correct hashtag.
>
> Uses Serverless framework and AWS Lambda

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
serverless invoke local -l -f reply

```

## Deployment

Deploy Lambda Functions

```
$ sls deploy -v
```

## See Also

*   [Serverless Framwork](http://www.serverless.com)

## License

MIT
