const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');


const CorsOption = {
    origin:'http://localhost:3000'
}
app.use(cors(CorsOption));
app.use(express.json());


app.get('/',(req,res)=>{
    res.json({message:"Backend Connected"})
})

















mongoose.connect("mongodb+srv://User:User55@user.h3b3ogz.mongodb.net/deploy")
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log(err);
})


app.listen(process.env.PORT || 6200,()=>console.log(`server Started `));