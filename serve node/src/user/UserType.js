



import {
  chartTypes,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLInt    

  } from 'graphql';
  
   const userTypes =new GraphQLObjectType({
    name: 'User',
    fields: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      firstName: {
        type: GraphQLString
      },
      
      lastName:{
          type:GraphQLString
      },
      email:{
        type:GraphQLString

      },
      telephone:{
        type:GraphQLInt    

      },
      password :{
        type:GraphQLString
      },
      role:{
        type:GraphQLInt    

      },

      jwt: {
        type:GraphQLString
      }
    }
  });




   const userInputType = new GraphQLInputObjectType({
	name: 'UserInput',
	fields: () => ({
    firstName: {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		},
		email: {
			type: GraphQLString
    },
     telephone:{
        type:GraphQLInt    

      },
    password :{
      type:GraphQLString
    }
	})
})


const loginInputType = new GraphQLInputObjectType({
	name: 'loginInput',
	fields: () => ({
   
		 telephone:{
        type:GraphQLInt    

      },
    password :{
      type:GraphQLString
    },
   

	})
})

export{userTypes ,userInputType,loginInputType};