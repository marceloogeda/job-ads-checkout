# Job Ads Checkout

Client application for the new job ads checkout system.

## Getting Started

No needs for installing dependencies.

```sh
cd ../
./start.sh
```

## Installing

### Prerequisites

* [Git](https://git-scm.com/)
* [Nodejs](https://nodejs.org/en/)

## Setup

```sh
git clone https://github.com/marceloogeda/job-ads-checkout.git
cd job-ads-checkout/client
npm i or yarn
```

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

#### `yarn start`

Runs the app in development mode.

#### `yarn test`

Runs the test watcher in an interactive mode.

#### `yarn run build`

Builds the app for production to the build folder.
