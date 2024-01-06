//import mongoose
const mongoose = require('mongoose')

//access connectionString
const connectionString = process.env.DATABASE

//connect node.js/server with mongodb -
mongoose.connect('mongodb+srv://amiyakiran196:mern@cluster0.f2ldtkl.mongodb.net/projectFairb4?retryWrites=true&w=majority').then(()=>{
    /* console.log(typeof(connectionString)); */
    console.log('mongobd connected successfully');
}).catch((err)=>{
    console.log(`mongodb failed to connect due to :${err}`);
})
