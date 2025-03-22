import express from 'express'

const app = express()

//C = Create => POST (method)
//C = Read => GET (method)
//C = Update => PUT (method)
//C = Delete => DELETET (method)

app.get('/',(req,res)=>{
    console.log("this is home route")
    res.send("this is your response")
})

const port = 3000;
app.listen(port,()=>console.log(`server is running on ${port}`))