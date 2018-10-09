import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
  } from 'graphql';
  import payementModel from './PayementSchema';
  import {payementTypes} from './PayementType';
  export default {
    PayementLists: {
      type: new GraphQLList(payementTypes),
      resolve: payementModel.getAllPayement 
    },

   /*  GetClaim:{
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

    } */
  }; 

