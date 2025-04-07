import express from 'express';
import mongoose from 'mongoose';
import { urlShort,getOriginalUrl } from './Controller/url.js';

const app = express();
const port = 3001;

app.use(express.urlencoded({extended:true}))

mongoose.connect(
    "mongodb+srv://brijeshkushwaha1168:Priya355@cluster0.1eru7iq.mongodb.net/",{
    "dbName":"Nodejs_Express_API"}).
    then(()=>console.log("Mongodb Connected"))
    .catch((error)=>console.log(error));

    app.get('/',(req,res)=>{
        res.render("server.ejs",{shortUrl:null})
    })

    //Handle URL Sumbission

    app.post('/Shorten',urlShort)

    // redirect to original url using short url
    app.get('/:shortCode',getOriginalUrl);




app.listen(port,()=>console.log(`Server is running on port ${port}`))