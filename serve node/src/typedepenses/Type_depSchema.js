
import mongoose from 'mongoose';
const Schema = mongoose.Schema


const depTypeSchema = new Schema({
  depType : {
    type: String,
    required: true,
    unique: true

  },

});

//create the model
const depTypeModel = mongoose.model('deptype', depTypeSchema);

//export the model
module.exports = depTypeModel;



//querie Alltype
module.exports.getAllType=()=>{
  return depTypeModel.find().exec()

}



//add type
module.exports.addtps = (root, args) => {
  console.log('args')

  const tModel = new depTypeModel({ depType:args.depType });
  const newType = tModel.save();
  console.log(args)
  return newType;
}