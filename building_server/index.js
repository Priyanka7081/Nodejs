import http from 'http'

const server = http.createServer((req,res)=>{
    console.log("our server is establish successfully")
    const date = new Date();
    console.log("last tie server hits",date)
    res.end("thank you for your visiting")
})

const port = 1000
server.listen(port,()=>console.log(`server is running on ${port}`))