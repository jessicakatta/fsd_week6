const express=require('express');
const app=express();
const port=3000;
app.use(express.json());
let users=[{id:4251,name:"jessica"},
    {id:4250,name:"harshitha"}
];
app.get('/users',(req,res)=>{
res.json(users);
});
app.post('/users',(req,res)=>{
    users=req.body;
    res.json(users);
});
app.put('/users',(req,res)=>{
    users=req.body;
    res.json(users);
});
app.delete('/users',(req,res)=>{
    users=[];
    res.json({
        message:"deleted"
    });
});
app.listen(port,()=>{
    console.log("started running");
});

