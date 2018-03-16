const { GraphQLSchema } =  require('graphql');


//add your query and mutation
module.exports = new GraphQLSchema({
  query: require('./rootType'),
  mutation: require('./mutation')
});
