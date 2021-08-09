var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://runway-cv-builder-default-rtdb.firebaseio.com"
});

const firestore = admin.firestore();

 class Database{

//Thêm


//Xóa
async  deleteCV(id, CVID) {
    try{
        await firestore.collection("Users").doc(id).update({
            OwnedCV:admin.firestore.FieldValue.delete(CVID),
    }catch(err){
        console.log(err);
    }
    return 0;
}   

//Sửa
}
module.exports=Database;





