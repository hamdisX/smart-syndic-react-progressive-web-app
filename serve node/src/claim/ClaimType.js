
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInputObjectType
  } from 'graphql';
  import GraphQlDate from 'graphql-date';
  import GraphQLObjectId from 'graphql-scalar-objectid'
import {userTypes} from '../user/UserType'
  
   const claimTypes =new GraphQLObjectType({
    name: 'Claim',
    fields: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      object: {
        type: GraphQLString
      },
      
      content:{
          type:GraphQLString
      },
      postedBy:{
        type:userTypes,
      },
      date:{
        type :GraphQlDate
      },
      img:{
        type: GraphQLString

      }
     
    }
  });




   const claimInputType = new GraphQLInputObjectType({
	name: 'ClaimInput',
	fields: () => ({
    object: {
			type: GraphQLString
		},
		content: {
			type: GraphQLString
    },
    img:{
      type:GraphQLString
    }
   
	})
})


export{claimTypes ,claimInputType};