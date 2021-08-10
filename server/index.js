const express = require("express");

const PORT = process.env.PORT || 3001;
const body = require('body-parser')
const cors = require("cors");
const app = express();
const Database = require("./database");
const db = new Database();
app.use(cors());
app.use(body.json());
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/testPostWithBody", async (req, res) => {
  const { json } = req.body
  try {
    console.log(json);
    res.send(json);
  } catch (err) {
    console.log(err);
  }

})
app.get("/getAPI", async (req, res) => {
  res.send("Hello from server");
})
///////// CV LIST API //////////////////////////////////
app.post("/deleteCV", async (req, res) => {
  const { id, CVID } = req.body;
  try {
    let result = await db.deleteCV(id, CVID);
    res.send("Xóa thành công");
  } catch (err) {

  }
})

app.post("/addCV", async (req, res) => {
  const { UserID, CVID } = req.body;
  try {
    let result = await db.addCV(UserID, CVID);
    res.send("Thêm CV thành công");
  } catch (err) {
  }
})

app.post("/deleteCV", async (req, res) => {
  const { id, CVID } = req.body;
  try {
    let result = await db.deleteCV(id, CVID);
    res.send("Xóa thành công");
  } catch (err) {

  }
})
///////// END CV LIST API //////////////////////////////////


///////// CV  API //////////////////////////////////

app.post("/saveCV", async (req, res) => {
  const { CVID, Fname, Lname, Email, dob, phone, Address, Country, Bio } = req.body
  try {
    let result = await db.saveCVInfo(CVID, Fname, Lname, Email, dob, phone, Address, Country, Bio, [], [], [], []);
    res.send("Lưu thông tin thành công");
  } catch (err) {
    console.log(err)
  }
})
///////// END CV  API //////////////////////////////////

////////// User CV ////////////////////
// app.post("/userAddCV",async(req,res)=>{
//   const {UserID,CVID, Fname, Lname, Email, dob, phone, Address, Country, Bio}=req.body
//   try{
//     let result=await db.userAddCV(UserID,CVID, Fname, Lname, Email, dob, phone, Address, Country, Bio);
//     res.send("Tạo CV thành công =");
//   }catch(err){
//     console.log(err)
//   }
// })

app.post("/userAddCV", async (req, res) => {
  const { UserID, Fname, Lname, Email, dob, phone, Address, Country, Bio, Skills, Hobbies, Educations, Employments } = req.body
  try {
    let result = await db.addNewCV(UserID, Fname, Lname, Email, dob, phone, Address, Country, Bio, Skills, Hobbies, Educations, Employments);
    console.log("ahahaha")
    res.send("Tạo CV mới thành công ");
  } catch (err) {
    console.log(err)
  }
})
app.get("/getOwnedCV", async (req, res) => {
  const { UserID } = req.body
  console.log(UserID);
  console.log(req.body);
  try {
    let result = await db.getAllOwnerCV(UserID);
    console.log(result)
    res.json(result);
  } catch (err) {
    console.log(err)
  }
})
