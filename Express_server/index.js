import express from 'express'

const app = express();

const port = 3000;
app.listen(port,()=>console.log(`Express server is running on port ${port}`));