const express=require('express')
const app=express();


app.get('/',(req,resp)=>{
      resp.send("hello")
})

app.listen(3001,(err)=>{
      if(!err){
            console.log("server started at 3001");
      }
})