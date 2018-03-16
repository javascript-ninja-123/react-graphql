const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList } = require('graphql');


  const LyricType = new GraphQLObjectType({
    name:"LyricType",
    fields:() => ({
      uuid:{type:GraphQLString},
      like:{type: GraphQLInt},
      content:{type:GraphQLString},
      songId:{type: GraphQLString},
      song:{
        type:require('./songType'),
        resolve(parentValue,args){

        }
      }
    })
  })



  module.exports = LyricType;
