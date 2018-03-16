const {lyricRef} = require('../config/database');
const {Firebase} = require('./class_firebase');


const Lyric = new Firebase(lyricRef);

const addLyric = (obj) => {
  return Lyric.add(obj,true);
}

const updateLyric = (obj) => {
  return  Lyric.update(obj)
}

const deleteLyric = id => {
  return Lyric.delete(id);
}

const fetchLyric = id => {
  return Lyric.fetchOne(id)
}

const likeLyric = id => {
  return Lyric.likeOne(id);
}


module.exports = {
  addLyric,
  updateLyric,
  deleteLyric,
  fetchLyric,
  likeLyric
}
