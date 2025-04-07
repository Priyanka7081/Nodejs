//brijeshkushwaha1168
//Priya355

import express from 'express'
import mongoose  from 'mongoose';

const app = express();
mongoose.connect
("mongodb+srv://brijeshkushwaha1168:Priya355@cluster0.1eru7iq.mongodb.net/",{
    "dbName":"Nodejs Express API"}).
    then(()=>console.log("Mongodb Connected")).catch((error)=>console.log(error));

const Port = 3000;
app.listen(Port,()=>console.log(`server is running on port${Port}`))