const mongoose =require( 'mongoose')
const path = require('path')

require('dotenv').config({ path: '/backend/.env'})

console.log('/backend/.env')

module.exports = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { 
            useUnifiedTopology: true,
            useNewUrlParser:true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }

}

