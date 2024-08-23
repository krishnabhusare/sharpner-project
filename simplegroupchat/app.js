const express=require('express');

const loginRoutes=require('./routes/login');
const massegeRoutes=require('./routes/massege');

const app=express();



const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoutes);
app.use(massegeRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found ha ha ha</h1>')
})

app.listen(3000);