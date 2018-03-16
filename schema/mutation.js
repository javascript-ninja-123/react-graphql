const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID,GraphQLNonNull } = graphql;
const SongType = require('./songType');
const LyricType = require('./lyricType');
const {addSong,deleteSong,updateSong} = require('../model/song');
const {addLyric,updateLyric,deleteLyric,likeLyric} = require('../model/lyric');



const mutation = new GraphQLObjectType({
  name:'Mutation',
  fields:{
    addSong:{
      type:SongType,
      args:{
        title:{type: GraphQLString}
      },
      resolve(parentValue,args){
        return addSong(args)
      }
    },
    deleteSong:{
      type:SongType,
      args:{
        id:{type:new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue,{uuid}){
        return deleteSong(uuid);
      }
    },
    addLyric:{
      type:LyricType,
      args:{
        content:{type: GraphQLString},
        songId:{type:new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue,args){
        return addLyric(args);
      }
    },
    likeLyric:{
      type:LyricType,
      args:{id:{type:new GraphQLNonNull(GraphQLString)}},
      resolve(parentValue,{uuid}){
        return likeLyric(uuid)
      }
    },
    deleteLyric:{
      type:LyricType,
      args:{id:{type:new GraphQLNonNull(GraphQLString)}},
      resolve(parentValue,{uuid}){
        return deleteLyric(uuid);
      }
    }
  }
})


module.exports = mutation
