const express=require('express');

const fs=require('fs');

const router=express.Router();



router.get('/',(req,res,next)=>{
    fs.readFile('knb.txt',(err,data)=>{
      res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input type="text" name="massege" id="massege"><input type="hidden" name="username" id="username"><button type="submit">send</button></form>`)
    })
   
    
})

router.post('/',(req,res,next)=>{
  console.log(req.body.username,req.body.massege);
  fs.writeFile('knb.txt',`${req.body.username}:${req.body.massege}`,{flag:'a'},(err)=>{
    if(err){
    console.log(err);
    }
  })

  res.redirect('/');
})

module.exports=router;