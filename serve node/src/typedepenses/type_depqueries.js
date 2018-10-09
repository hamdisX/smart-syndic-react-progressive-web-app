 import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
  } from 'graphql';
  import typeModel from './Type_depSchema';
  import {TypeDepTypes,inputTypeDeps} from './type_depType';
  export default {
    TypeDepLists: {
      type: new GraphQLList(TypeDepTypes),
      resolve: typeModel.getAllType 
    },

   
  };  
