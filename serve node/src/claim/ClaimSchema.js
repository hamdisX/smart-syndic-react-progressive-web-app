

import mongoose from 'mongoose';

const Schema = mongoose.Schema




const ClaimSchema = new Schema({
	object: {
		type: String,
		required: true
	},
	content: {
	 	type: String,
		required: true
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
  },
  img:  String ,

  date: { type: Date, default: Date.now },


} );




  //create the model
  const ClaimModel = mongoose.model('claim', ClaimSchema);


   //export the model
module.exports = ClaimModel ;



 


//querie AllClaim
module.exports.getAllClaim=()=>{
  return ClaimModel.find({},null,{sort: {date: -1}, limit: 7}).populate('postedBy').exec()
}

//add reclamation
 module.exports.addclaim=(root , args)=>{
  const cModel = new ClaimModel( {object:args.object, content:args.content,postedBy:args.postedBy,img:args.img});

  const newClaim = cModel.save();
  return newClaim
} 

//delete reclamation
module.exports.removeClaim=(root, args)=> {
  const removedclaim = ClaimModel.findByIdAndRemove(args.id).exec();
  if (!removedclaim) {
    throw new Error('Error removing reclamations')
  }
  return removeduser;
}

//update reclamation
module.exports.updateClaim=(root,args)=>{
  return ClaimModel.findByIdAndUpdate(
    args.id,
    { $set: { ...args.data } },
    { new: true }
  )    
  .catch(err => new Error('Couldn\'t Update  ', err));
}
