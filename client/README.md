# Job Ads Checkout

Client application for the new job ads checkout system.

## Getting Started

### Prerequisites

* [Git](https://git-scm.com/)
* [Nodejs](https://nodejs.org/en/)

```sh
git clone https://github.com/marceloogeda/job-ads-checkout.git
cd job-ads-checkout/client
```

## Setup

```sh
npm i or yarn
npm start or yarn start
```

Open [localhost:3000](http://localhost:3000) for local development.  

## Folder Structure

After download, your project should look like this:

```
client/               # if you don't change the local project name
├── .gitignore
├── package.json
├── README.md
├── node_modules/
├── public/
└── src/
    └── actions/               # All actions must be add here
    └── components/            # All reusable components must be add here
    └── constants/             # All constants must be set here
    └── containers/            # All container components must be add here
    └── reducers/              # All reducers must be set here
    └── service/               # All services must be add here
    └── types/                 # All types must be set here
```

## Available Scripts

#### `yarn start` or `npm start`

Runs the app in development mode.

#### `yarn test` or `npm test`

Runs the test watcher in an interactive mode.

#### `yarn flow` or `npm flow`

Runs the flow to static type checker.

#### `yarn run build` or `npm run build`

Builds the app for production to the build folder.
