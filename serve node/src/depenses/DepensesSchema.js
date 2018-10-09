

import mongoose from 'mongoose';
import BudgetModel from '../budget/BudgetSchema';


const Schema = mongoose.Schema

const DepensesSchema = new Schema({
	description: {
		type: String,
		required: true
	},
	montant: {
	 	type: Number,
		required: true
    },

    type_dep: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'deptype',
      default: ('000000000000000000000001')
  },
budget_dep: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'budget'
},
  date: { type: Date , default: Date.now},


} );




  //create the model
  const DepModel = mongoose.model('depense', DepensesSchema);


   //export the model
module.exports = DepModel ;

//querie AllDep
module.exports.getAllDep=()=>{
  return DepModel.find().populate('budget_dep').populate('type_dep').exec()
}

//add depense
 module.exports.addDep=(root , args)=>{
  const dModel = new DepModel( {description:args.description, montant:args.montant,
                                type_dep:args.type_dep,budget_dep:args.budget_dep});
  const newDep = dModel.save();
	const bmodel = BudgetModel.findById("5ae0c38aed3f1e1859fffcb8",(err, event) => {
    // updating that event
    event.caisse        =  event.caisse - args.montant;
    event.depense        =  event.depense + args.montant;

    console.log(event.caisse)
    event.save((err) => {
      if (err)
        throw err;
      });
    }
);
  return newDep
}
