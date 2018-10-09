import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
  } from 'graphql';
  import claimModel from './ClaimSchema';
  import {claimTypes} from './ClaimType';
  export default {
    ClaimLists: {
      type: new GraphQLList(claimTypes),
      resolve: claimModel.getAllClaim 
    },

    GetClaim:{
      type: claimTypes,
      args: {
        id: {
          name: 'ID',
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(root, params) {
        return claimModel.findById(params.id).exec();
      }

    }
  }; 

