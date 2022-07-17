# ANZ Exercise App

This project uses below packages for development and production
```
express
redis
crypto-js
http-status-codes
```

required node version - `v17.9.1`\
required yarn version - `1.22.19`

## Redis
The Redis server should be lunched before the `yarn start`

```bash
brew install redis
brew services start redis #default port is 6379

redis-cli ping #should return pong
```

## Available Scripts
In the project directory, you can run:

### `yarn install`
Install all packages.

### `yarn start`

Runs the app with `8080` port in the development mode.\
This app supports only restfull service.

When `yarn start`, there are two end-points - `/tokenize` and `/detokenize`
You can test them with curl or other rest clients
```bash
#example of curl
curl --request POST \
  --url http://localhost:8080/tokenize \
  --header 'Content-Type: application/json' \
  --data '[
	"1111-2222-3333-4444",
	"2222-2222-3333-4444"
]'


curl --request POST \
  --url http://localhost:8080/detokenize \
  --header 'Content-Type: application/json' \
  --data '[
	"U2FsdGVkX18uof+Rl7kvroRg5YgUsSuAk92v37brGDOlLU1H3ekJd95Fk6ts5BK9",
	"U2FsdGVkX18tU8bSWZZLSgBXQaDEhJpJsqCS3gQAhUzr11d65BLPQ3LQEp2ctO0a"
]'
```
### `yarn test`

Launches the unit test.

## Change PORT
PORT is `src/constants.js/PORT`.\
If you want to Port number, change it.

