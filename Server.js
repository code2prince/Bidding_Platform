import express from 'express'
import dbConnect from './DataBase/db.js';
import bodyParser from 'body-parser';
// import router from './Routes/Router.js';

const db=await dbConnect();
const port=5555;

const app=express();
// app.use('/API',router)

app.listen((port),()=>{
    console.log(`server is now running on Port: ${port}`);
})
export default db;
