const express=require('express');

const router=express.Router();

router.get('/login',(req,res,next)=>{
    res.send('<form action="/" onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" method="POST"><input type="text" name="username" id="username"><button type="submit">login</button></form>')
})


module.exports=router;

