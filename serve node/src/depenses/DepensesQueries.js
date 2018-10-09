import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
  } from 'graphql';
  import depModel from './DepensesSchema';
  import {DepenseTypes} from './DepensesType';
  export default {
    DepensesLists: {
      type: new GraphQLList(DepenseTypes),
      resolve: depModel.getAllDep 
    },


  }; 

