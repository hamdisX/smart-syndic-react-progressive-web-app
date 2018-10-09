
import mongoose from 'mongoose';


const Schema = mongoose.Schema

const BudgetSchema = new Schema({
	annee: {
		type: Number ,
    required: true,
    unique: true
	},
	budgetDdesire: {
	 	type: Number,
		required: true
    },
    budgetActuel:{
        type: Number,
		required: true
    },
    depense :{
        type: Number,
      
		required: true
    },
    caisse :{
      type: Number,
  required: true
  }
} );




  //create the model
  const BudgetModel = mongoose.model('budget', BudgetSchema);


   //export the model
module.exports = BudgetModel ;


//add budget
 module.exports.addbudget=(root , args)=>{
  const bModel = new BudgetModel(args.data);
  const newbudget = bModel.save();
  return newbudget
} 

// get budget
module.exports.getBudget=()=>{
  return BudgetModel.find().exec()
}


//delete budget
module.exports.removeBudget=(root, args)=> {
  const removeduser = BudgetModel.findByIdAndRemove(args.id).exec();
  return removeduser;BudgetModel
}

//update user
module.exports.updateBudget=(root,args)=>{
  return BudgetModel.findByIdAndUpdate(
    args.id,
    { $set: { ...args.data } },
    { new: true }
  )
  .catch(err => new Error('Couldn\'t Update User data, ', err));
}


