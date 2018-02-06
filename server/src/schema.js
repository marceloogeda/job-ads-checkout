const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const resolvers = require('./resolvers/');

const typeDefs = `
  type Customer {
    id: ID!
  }

  type Discout {
    productId: ID!
    repeatEach: Int
    unit: Int
    value: Float
  }

  type PricingRules {
    id: ID!
    customerId: ID!
    discounts: [Discout]
  }

  type Product {
    description: String
    id: ID!
    name: String
    price: Float!
  }

  # This type specifies the entry points into our API
  type Query {
    customer(id: ID!): Customer
    customers: [Customer]
    pricingRule(id: ID, customerId: ID): PricingRules
    pricingRules: [PricingRules]
    products: [Product]
    product(id: ID!): Product
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
