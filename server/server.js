const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const cors = require('@koa/cors');
const schema = require('./src/schema');

const app = new Koa();

app.use(cors());
app.use(mount('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})));

app.listen(5000);
