
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
  } from 'graphql';


  const TypeDepTypes =new GraphQLObjectType({
    name: 'DepType',
    fields: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      depType: {
        type: GraphQLString,
      },
    }
  });


  const TypeDepInputTypes =new GraphQLObjectType({
    name: 'inputTypeDeps',
    fields: () => ({
      typeDep: {
          type: GraphQLString
        },
})
  });



  export {TypeDepTypes,TypeDepInputTypes};
