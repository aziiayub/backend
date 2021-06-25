import express from 'express';
import mongoose from 'mongoose';
import route from './routers/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();


const PORT = 8008;
const host = '0.0.0.0';

//App use fro run
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/user',route);


//Db Connection 
const URL = 'mongodb+srv://azam:ZA8AwLCH7xPExK3O@crud.hycmc.mongodb.net/CRUD?retryWrites=true&w=majority';
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>{
    //app Listen
    app.listen(PORT, host , ()=>{
        console.log(`This is port ${PORT}`);
    })
}).catch(error=>{
    console.log('Error',error.message);
})


