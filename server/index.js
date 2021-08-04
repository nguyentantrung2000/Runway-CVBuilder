const express = require("express");

const PORT = process.env.PORT || 3001;
const body=require('body-parser')
const cors = require("cors");
const app = express();
app.use(cors());
app.use(body.json());
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/testPostWithBody", async (req,res)=>{
  const {json}=req.body
  try{
    console.log(json);
    res.send(json);
  }catch(err){
    console.log(err);
  }
  
})
app.get("/getAPI", async (req,res)=>{
    res.send("Hello from server"); 
})