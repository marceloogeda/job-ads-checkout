# Job Ads Checkout

That's the new job ads checkout system written in ReactJS + Redux + GraphQL.

## Contents

- [Getting Started](#getting-started)
- [Technologies used](#technologies-used)

## Getting Started

No needs for installing dependencies.

#### Prerequisites

- [Docker](https://www.docker.com/get-docker)
- [Docker Compose](https://docs.docker.com/compose/gettingstarted/)
- [NodeJS](https://docs.docker.com/compose/gettingstarted/)

#### Docker start!

```sh
chmod +x start.sh
./start.sh
```

Open [localhost:3000](http://localhost:3000) for local development of the client.  
Open [localhost:5000/graphql](http://localhost:5000/graphql) for local development of the server.

###### Customer versions

- [Unilever](http://localhost:3000?customerId=unilever);
- [Apple](http://localhost:3000?customerId=apple);
- [Nike](http://localhost:3000?customerId=nike);
- [Ford](http://localhost:3000?customerId=ford);
- [Default](http://localhost:3000);


#### Run tests!

Unfortunately the tests are still not running inside the docker :trollface:

```sh
# Clone this repository and then ran:
cd job-ads-checkout/client/
yarn or npm install
yarn test or npm test
```

#### Docker build!

```sh
chmod +x build.sh
./build.sh
```

## Technologies used

- [Create React App](https://github.com/facebook/create-react-app)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Flow](https://flow.org/en/)
- [GraphQL](http://graphql.org/)
- [Jest](https://facebook.github.io/jest/)
- [NodeJS](https://nodejs.org/en/)
- [Prettier](https://prettier.io/)
- [Redux](https://redux.js.org/)
- [Styled Components](https://www.styled-components.com/)
