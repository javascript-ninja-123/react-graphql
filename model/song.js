const {songRef,lyricRef,ref} = require('../config/database');
const {Firebase}  = require('./class_firebase');


const Song = new Firebase(songRef)


//obj should contain title
const addSong = async (obj) => {
  return Song.add(obj,false)
}

const fetchSongs = async () => {
  const data  =  await Song.fetch()
  return data
}

const deleteSong = async(id) => {
  return Song.delete(id)
}

const updateSong = async(obj) => {
  const snap = await songRef.orderByChild('id').equalTo(obj.id)
  .once('child_added')
  return await snap.ref.update(obj);
}

const fetchLyrics = async(id) => {
  return await Song.fetchRelation(id,lyricRef,'songId');
}


const fetchSong = async(id) => {
  return await Song.fetchOne(id)
}

module.exports = {
  addSong,
  fetchSongs,
  updateSong,
  deleteSong,
  fetchLyrics,
  fetchSong
}
