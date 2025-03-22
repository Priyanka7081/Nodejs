import express from 'express'
import path from 'path'

const app = express()

app.get("/",(req, res)=>{
   // res.send("<h1>Priyanka kushwaha</h1>");
    
   // res.json({kuchhbhi:'kuchh kuchh'});

   //res.end("jao meri life se dur chle jao");

   const dir = path.resolve()

   const url = path.join(dir,'./index.html');
   
   res.sendFile(url)



})

app.listen(3000,()=>
    console.log("server is running on port 3000"))