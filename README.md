# truffle-dev-ci

[![Build Status](https://travis-ci.org/gyng/truffle-dev-ci.svg?branch=master)](https://travis-ci.org/gyng/truffle-dev-ci)

Repository for Truffle with testing, linting, and a Travis CI configuration set up.

## Testing

Start a test server, and run the tests

```
ganache-cli
yarn test
```

```
yarn lint
```

## Docker image

Docker image for testing and running on CI.

    docker-compose up
    docker-compose exec truffle yarn run test:docker
