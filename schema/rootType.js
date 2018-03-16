const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull,GraphQLString } = graphql;
const SongType = require('./songType');
const LyricType = require('./lyricType');
const {fetchSongs,fetchLyrics,fetchSong} = require('../model/song');
const {fetchLyric} = require('../model/lyric');


const RootQuery = new GraphQLObjectType({
  name:'RootType',
  fields:() => ({
    songs:{
      type:new GraphQLList(require('./songType')),
      async resolve(){
        return await fetchSongs();
      }
    },
    song:{
      type:require('./songType'),
      args:{
        uuid:{type:new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue,{uuid}){
        return fetchSong(uuid)
      }
    },
    lyric:{
      type:require('./lyricType'),
      args:{
        uuid:{type:new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue,{uuid}){
        return fetchLyric(uuid)
      }
    }
  })
})


module.exports = RootQuery;
