import http from 'http'

const server = http.createServer((req,res)=>{
   // console.log("server is hit by someone")
   // res.end('uttam & priyanka')


if(req.url ==='/superman'){
    res.end("you are belong from DC")
}else if(req.url === '/spiderman'){
    res.end("you are belong from marvel")}


})


const port = 2000
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});
