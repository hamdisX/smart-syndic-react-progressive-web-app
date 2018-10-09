
import mongoose from 'mongoose';
require('mongo-relation');


const Schema = mongoose.Schema;

const PollSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  options: [{ text: { type: String }, votes: { type: Number,default: 0  } }],

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  date: { type: Date, default: Date.now },

});



//create the model
const PollModel = mongoose.model('poll', PollSchema);


//export the model
module.exports = PollModel;


//add poll
module.exports.addpoll=(root , args)=>{
  const pModel = new PollModel( {title:args.title, options:args.options,createdBy:args.createdBy});
  const newPoll = pModel.save();
  return newPoll
}

//querie AllPoll
module.exports.getAllPoll=()=>{
  return PollModel.find({}).populate('createdBy').exec()
}

//queries last Poll
module.exports.getPOLL=()=>{
  return PollModel.findOne({},null,{sort: {date: -1}}).exec()
}

//add vote
module.exports.addVote=(root , args)=>{

  //console.log( PollModel.find({"options._id":"5af47140255d8506ca1bae38"}))
  PollModel.findOne({},null,{sort: {date: -1}},(err, evt) =>{
    evt.options[parseInt(args.vt)].votes    =  evt.options[parseInt(args.vt)].votes + 1;

    //console.log(evt.find({"options._id":"5af47140255d8506ca1bae38"}))
    evt.save((err) => {
      if (err)
        throw err;
      });

  })
 

};


