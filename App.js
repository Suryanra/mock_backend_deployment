const express=require('express')
const app=express();


app.get('/',(req,resp)=>{
      resp.send("hello")
})
app.get('/surya',(req,resp)=>{
      resp.send({"msgfrom_surya":"hello everybody"});
})

app.listen(3001,(err)=>{
      if(!err){
            console.log("server started at 3001");
      }
})