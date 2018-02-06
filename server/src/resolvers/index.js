const customers = require('./customers');
const products = require('./products');
const pricingRules = require('./pricingRules');

module.exports = {
  Query: {
    customers: () => {
      return customers;
    },
    customer: (root, { id }) => {
      return customers.find(customer => customer.id === id);
    },
    pricingRules: () => {
      return pricingRules;
    },
    pricingRule: (root, { id, customerId }) => {
      if (!customerId) {
        return pricingRules.find(rule => rule.id === id);
      }

      return pricingRules.find(rule => rule.customerId === customerId);
    },
    products: () => {
      return products;
    },
    product: (root, { id }) => {
      return products.find(product => product.id === id);
    },
  }
};
