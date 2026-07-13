const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        const  conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connect to Database!!', conn.connection.name)
    } catch (error) {
        console.log('Error in Connecting to Database!!', error.message)
        process.exit(1);
    }
    
}
module.exports = connectDB;