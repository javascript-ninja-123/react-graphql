const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const schema = require('../schema/schema');


module.exports = (app) => {

  app.use(bodyParser.json());
  app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
  }));

}
