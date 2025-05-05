require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./database/db.js");
const loginModel = require("./models/form.js");
const cors =require('cors')

// databse
connectDB();
// middlewares
app.use(cors({
  origin:["https://suvash.netlify.app/","http://localhost:3000"
]}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`server is up on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("welcome to portfolio server");
});

app.post("/contact", async(req, res) => {
  try {
    const receivedData = req.body;
    const saved= await loginModel.create(receivedData)
      console.log('data saved in Database',saved);
      res.status(200).json({message:'received success'})
    
  } catch (error) {
    res.status(500).json({error:'server error'})
  }
});
