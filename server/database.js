var admin = require("firebase-admin");

var serviceAccount = require("../server/runway-cv-builder-firebase-adminsdk-e0svh-8530fb2529.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://runway-cv-builder-default-rtdb.firebaseio.com"
});

const firestore=admin.firestore();


