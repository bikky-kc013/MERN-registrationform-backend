const mongoose=require("mongoose");
//const validator=require("validator");
const signupSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        email:
        {
            type:String,
            required:true  
        },
        phone:
        {
            
            type:String,
            required:true  
        },
        email:
        {
         
            type:String,
            required:true,
            unique:true  
        },
        phone:
        {
            type:Number,
            required:true,
            unique:true  
        },
        address:
        {
            type:String,
            required:true
        },
        dob:
        {
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        confirm:
        {
            type:String,
            required:true
        }
    }
)
const Collection=new mongoose.model("Collection1",signupSchema);
module.exports=Collection;