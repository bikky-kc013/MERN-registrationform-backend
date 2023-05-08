const express=require("express");
const path=require("path");
require("./db/conn");
const hbs=require("hbs");
const Collection= require("./models/mongodb");
const app=express();
const port=process.env.PORT  || 8000;
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended:true
    }));

//built in Middleware
const staticPath=path.join(__dirname,'../public');
const templatePath=path.join(__dirname,"../templates/views");

//to set the view engine
app.set('view engine','hbs');
app.set("views",templatePath);
app.use(express.static(staticPath));

app.get("" ,(req,res)=>
{
    res.render("signup");
});
app.post("/register",async (req,res)=>
{       
        const firstname=req.body.firstname;   
        const lastname=req.body.lastname;
        const username=req.body.username;
        const email=req.body.email;
        const phone=req.body.phone;
        const password=req.body.password;
        const confirm=req.body.confirm;
        console.log(`${firstname}
         ${lastname} 
         ${username} 
         ${email}
         ${phone}
         ${password} 
         ${confirm}`);
       const user =new Collection(req.body);
       user.save().then(()=>
       {
        res.send(user);
       })
       .catch((err)=>
       res.send(err));
})
app.listen(port, ()=>
{
    console.log(`Listening to the port ${port}`);
});