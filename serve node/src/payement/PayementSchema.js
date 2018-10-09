
import BudgetModel from '../budget/BudgetSchema';
import mongoose from 'mongoose';
const Schema = mongoose.Schema


const PayementSchema = new Schema({
	montant: {
		type: Number,
		required: true
	},
	mois: {
	 	type: String,
		required: true
    },
    paidBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
  },
  budgetAnnee: {
    type: mongoose.Schema.Types.ObjectId,
      ref: 'budget'
  }

} );




  //create the model
  const PayementModel = mongoose.model('payment', PayementSchema);


   //export the model
module.exports = PayementModel ;

//querie AllPayment
module.exports.getAllPayement=()=>{
  return PayementModel.find().populate('paidBy').populate('budgetAnnee').exec()
 // return PayementModel.find().populate('paidBy').exec()


}

//add payment
 module.exports.addpayment=(root , args)=>{
  const pModel = new PayementModel( {montant:args.montant, mois:args.mois,paidBy:args.paidBy,budgetAnnee:args.budgetAnnee});
  const newPayement = pModel.save();
  const bmodel = BudgetModel.findById("5ae0c38aed3f1e1859fffcb8",(err, event) => {
    // updating that event
    event.caisse        =  event.caisse + args.montant;
    event.budgetActuel        =  event.budgetActuel + args.montant;

    console.log(event.caisse)
    event.save((err) => {
      if (err)
        throw err;
      });
    }
);
    
 // return pModel;
 console.log(bmodel.Schema)
  return newPayement
} 

/* //delete reclamation
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
} */