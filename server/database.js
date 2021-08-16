var admin = require("firebase-admin");

var serviceAccount = require("../server/runway-cv-builder-firebase-adminsdk-e0svh-ab805ce173.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://runway-cv-builder-default-rtdb.firebaseio.com"
});

const firestore = admin.firestore();

class Database {

  //Thêm vào OwnerCV 
  async addCV(UserID) {
    try {
      let temp;
      let date=new Date().getDate()
      let month=new Date().getMonth()
      let year=new Date().getFullYear()
      await firestore.collection("CV").add({
        CVDetails: {
          Fname: null,
          Lname: null,
          Email: null,
          dob: null,
          phone: null,
          Address: null,
          Country: null,
          Bio: null,
          Skills: null,
          Hobbies: null,
          Educations: null,
          Employments: null,
        },
        CVThumbnail: null,
        CVImage: null,
        dateCreated:`${month}/${date}/${year}`

      }).then(async data => {
        return temp = data.id;
      })
      await firestore.collection("Users").doc(UserID).update({
        OwnedCV: admin.firestore.FieldValue.arrayUnion(temp),
      })
      return 0
    }
    catch (err) {
      console.log(err);
    }
  }


  async getAllOwnerCV(UserID) {
    let CVList;
    let CVDetailList = [];
    CVList = await firestore.collection("Users").doc(UserID)
      .get().then(data => {
        return data.data().OwnedCV;
      })
    for (let i = 0; i < CVList.length; i++) {
      await firestore.collection("CV").doc(CVList[i]).get().then(data => {
        return CVDetailList.push(data.data())
      })
    }
    return CVDetailList;
  }
  async getCVDetail(CVID) {
    let temp;
    await firestore.collection("CV").doc(CVID).get().then(data => {
      return temp = data.data();
    })
    return
  }



  //Xóa
  async deleteCV(id, CVID) {
    try {
      await firestore.collection("Users").doc(id).update({
        OwnedCV: admin.firestore.FieldValue.arrayRemove(CVID),
      })
    } catch (err) {

    }
    return 0;
  }

  //Sửa


  ////Lưu thông tin CV
  async saveCVInfo(CVID, Fname, Lname, Email, dob, phone, Address, Country, Bio, Skills, Hobbies, Educations, Employments, CVThumbnail, CVImage) {
    try {
      await firestore.collection("CV").doc(CVID).set({
        CVDetails: {
          Fname: Fname || null,
          Lname: Lname || null,
          Email: Email || null,
          dob: dob || null,
          phone: phone || null,
          Address: Address || null,
          Country: Country || null,
          Bio: Bio || null,
          Skills: Skills || null,
          Hobbies: Hobbies || null,
          Educations: Educations || null,
          Employments: Employments || null,
        },
        CVThumbnail: CVThumbnail || null,
        CVImage: CVImage || null,
      })
    } catch (err) {

    }
    return 0;
  }
}

module.exports = Database;





