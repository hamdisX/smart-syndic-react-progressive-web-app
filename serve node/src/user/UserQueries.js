import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt
  } from 'graphql';
  import userModel from './UserSchema';
  import {userTypes} from './UserType';
  export default {
    UserLists: {
      type: new GraphQLList(userTypes),
      resolve: userModel.getAllUser 
    },

    SingleUser:{
      type: userTypes,
      args: {
        telephone: {
          name: 'telephone',
          type:  GraphQLInt
        }
      },
      resolve(root, params) {
        //return userModel.findById(params.id).exec();
        return userModel.findOne({ 'telephone': params.telephone}).exec();    
      }

    }
  }; 

