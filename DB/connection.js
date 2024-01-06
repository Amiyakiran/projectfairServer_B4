//import mongoose
const mongoose = require('mongoose')

//access connectionString
const connectionString = process.env.DATABASE

//connect node.js/server with mongodb -
mongoose.connect(connectionString).then(()=>{
    console.log('mongobd connected successfully');
}).catch((err)=>{
    console.log(`mongodb failed to connect due to :${err}`);
})
