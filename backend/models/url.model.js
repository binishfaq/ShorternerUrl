const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
originalUrl:{
    type: String,
    require: true,
    trim: true
},
shortCode:{
    type: String,
    require: true,
    unique: true,
    trim: true
},
 clicks: {
    type: Number,        
    default: 0           
  },
   // When it was created
  createdAt: {
    type: Date,          
    default: Date.now    
 }
});

const Url = mongoose.model('Url',urlSchema)

module.exports = Url;