const admin = require('firebase-admin');
const {DATABASE_NAME} = require('./secret');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`
});


const db = admin.database();

///databsae ref
const ref = db.ref("server");
const songRef = ref.child('song');
const lyricRef = ref.child('lyric');


module.exports = {
  ref,
  songRef,
  lyricRef
}
