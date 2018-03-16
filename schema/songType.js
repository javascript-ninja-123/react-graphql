const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList } = require('graphql');
const {fetchLyrics} = require('../model/song');


const songType = new GraphQLObjectType({
  name:"SongType",
  fields:() => (
    {
      uuid:{type: GraphQLString},
      title:{type: GraphQLString},
      lyrics:{
        type:new GraphQLList(require('./lyricType')),
        resolve(parentValue){
          return fetchLyrics(parentValue.uuid)
        }
      }
    }
  )
})


module.exports = songType
