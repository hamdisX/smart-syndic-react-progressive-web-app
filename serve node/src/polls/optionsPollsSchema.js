
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OptionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
  }
});

  //create the model
  const OptionModel = mongoose.model('option', OptionSchema);


   //export the model
module.exports = OptionModel ;
