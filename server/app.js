const express = require('express');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8080, ()=>  {
   console.log("server is running")
})

app.get("/", (req, res)=>{
    res.status(200).send("Backend is running")
});

app.post('/login', (req, res)=>{

    let email = req.body.email;
    if(!email){
        res.status(500).json({
            message:"Please provide email"
        })
        return
    }
    let password = req.body.password;
    if(!password){
        res.status(500).json({
            message : "Please enter the password"
        })
        return;
    }

    let default_user = {
        email:"preethi@linktree.com",
        password: "preethi@linktree.com"
    }

    if(email == default_user.email){
       if(password == default_user.password){
        res.status(200).json({
            message:"successfully logged in"
        })
        return
       } else {
        res.status(500).json({
            message:"Wrong password"
        })
        return   
       }
    } else{
        res.status(500).json({
            message:"User does not exsist"
        })
        return
    }
})