import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import router from "../routes/feedbackRoute.js"

const app=express();

const PORT=3000 || process.env.PORT;

app.use(express.json())
//Mouting api 
app.use("/api/v1",router)

app.get("/", (req, res)=>{
  res.json({
    success: true,
    message: "Server Running Successfully"
  })
})

dotenv.config();

dbConnect();

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT:${PORT}`);
    
})
