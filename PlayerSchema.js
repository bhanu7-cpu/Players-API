const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const playerSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    average:{
        type: Number,
        required:true
    },
    team: {
      type: String,
      required: true
    },
    runs:{
        type:Number,
        required:true
    },
    wickets:{
        type:Number,
        required:true
    }
  });

  module.exports = mongoose.model('Player', playerSchema)