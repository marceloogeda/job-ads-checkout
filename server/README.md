# Job Ads Checkout

Server application for the new job ads checkout system.

## Getting Started

### Prerequisites

* [Git](https://git-scm.com/)
* [Nodejs](https://nodejs.org/en/)

```sh
git clone https://github.com/marceloogeda/job-ads-checkout.git
cd job-ads-checkout/server
```

## Setup

```sh
npm i or yarn
npm start or yarn start
```

Open [localhost:5000/graphql](http://localhost:5000/graphql) for local development.

## Folder Structure

After download, your project should look like this:

```
server/               # if you don't change the local project name
├── .gitignore
├── package.json
├── README.md
├── node_modules/
└── src/
    └── resolvers/             # All resolvers must be add here
    └── schema.js              # All schemas must be set here
```

## Available Scripts

#### `npm start`

Runs the app in development mode.


## Examples

REQUEST PARAMS: Get all products

```graphql
query {
  products {
    id
    name
    description
    price
  }
}
```

RESPONSE:

```json
{
  "data": {
    "products": [
      {
        "id": "classic",
        "name": "Classic Ad",
        "description": "Offers the most basic level of advertisement",
        "price": 269.99
      },
      {
        "id": "standout",
        "name": "Standout Ad",
        "description": "Allows advertisers to use a company logo and use a longer presentation text",
        "price": 322.99
      },
      {
        "id": "premium",
        "name": "Premium Ad",
        "description": "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
        "price": 394.99
      }
    ]
  }
}
```

---

REQUEST PARAMS: Get classic product

```graphql
query {
  product(id: "classic") {
    id
    name
    description
    price
  }
}
```

RESPONSE:

```json
{
  "data": {
    "product": {
      "id": "classic",
      "name": "Classic Ad",
      "description": "Offers the most basic level of advertisement",
      "price": 269.99
    }
  }
}
```

---

REQUEST PARAMS: Get pricing rule from Unilever customer

```graphql
query {
  pricingRule(customerId: "unilever") {
    id
    customerId
    discounts {
      productId
      repeatEach
      unit
      value
    }
  }
}
```

RESPONSE:

```json
{
  "data": {
    "pricingRule": {
      "id": "2324",
      "customerId": "unilever",
      "discounts": [
        {
          "productId": "classic",
          "repeatEach": 3,
          "unit": 3,
          "value": 269.99
        }
      ]
    }
  }
}
```
