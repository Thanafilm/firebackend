const admin = require('firebase-admin')
const serviceAccount = require('./cow-auct-market-firebase-adminsdk-lyxi6-dbd7a5ab52.json')
const config = require('./config');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cow-auct-market.firebaseio.com",config
  });
  const db = admin.firestore();
  module.exports = {admin,db}