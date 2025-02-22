const express = require("express");
const app = express();

const PORT = 4200;

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({
      message: "Server is up and we are in home page"  
    });
})
/**
 * Route: /Owners
 * Method: /GET
 * Description: Get all Owners
 * Access: Public
 * Parameters: None
 */

app.get("/users", (req, res)=>{
  res.status(200).json({
    success: true,
    data: Owners
  })
})
app.get("*",(req, res)=>{
  res.status(300).json({
      message:"This route does not exist" 
  });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is up n running on port ${PORT}`)
})


