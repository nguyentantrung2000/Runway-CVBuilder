var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://runway-cv-builder-default-rtdb.firebaseio.com"
});

const firestore=admin.firestore();


