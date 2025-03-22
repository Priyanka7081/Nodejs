import express from 'express'

const app = express()

const product = [
    {title: "iphone", price: 100000},
    {title: "onepluse", price: 90000},
    {title: "sony", price: 50000},
]


app.get('/',(req,res)=>{
    const product = {
        title: "sony",
         price: 50000,
    }

    res.render('index.ejs',{product})
    console.log('serving ejs file')
})

app.listen(1000,()=>console.log("Server is running on port 1000"))