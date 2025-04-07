//brijeshkushwaha1168
//Priya355

import express from 'express';
import mongoose  from 'mongoose';
import { userRegister } from './Controller/User.js';

const app = express();

app.use(express.urlencoded({extended:true}))

mongoose
.connect
("mongodb+srv://brijeshkushwaha1168:Priya355@cluster0.1eru7iq.mongodb.net/",
    {
    "dbName":"Nodejs_Express_API",
}
)
.then(()=>console.log("Mongodb Connected"))
.catch((error)=>console.log(error));

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/',userRegister)
const Port = 3000;
app.listen(Port,()=>console.log(`server is running on port${Port}`))