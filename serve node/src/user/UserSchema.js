

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
    telephone: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type: Number,
    default : 0
  },
  jwt: {
    type: String,

  }
});




//create the model
const UserModel = mongoose.model('user', UserSchema);


//export the model
module.exports = UserModel;
module.exports.getAllUser = () => {
  return UserModel.find().exec()
}

//add user
module.exports.adduser = (root, args) => {
  const uModel = new UserModel({firstName:args.firstName,lastName:args.lastName,email:args.email,telephone:args.telephone,password:args.password,role:args.role });
  const newUser = uModel.save();
  uModel.jwt = jwt.sign({ _id: uModel._id }, "super-secret");
  return newUser
}

//delete user
module.exports.removeUser = (root, args) => {
  const removeduser = UserModel.findByIdAndRemove(args.id).exec();
  if (!removeduser) {
    throw new Error('Error removing user')
  }
  return removeduser;
}

//update user
module.exports.updateUser = (root, args) => {
  return UserModel.findByIdAndUpdate(
    args.id,
    { $set: { firstName:args.firstName,lastName:args.lastName,email:args.email,telephone:args.telephone,password:args.password} },
    { new: true }
  )
    .catch(err => new Error('Couldn\'t Update User data, ', err));
}


//login
module.exports.logiin = (root, args) => {
  const usr = UserModel.findOne({ email: args.data.email }).exec((err, res) => {
    console.log(res)

    if (err) {
      throw new Error('Email not found');
    }
    if (res == null) {
      throw new Error('user not found');

    }
  });
  return usr
}
