
import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLInt

  } from 'graphql';
  import GraphQlDate from 'graphql-date';
  import GraphQLObjectId from 'graphql-scalar-objectid'
import {userTypes} from '../user/UserType'
import {budgetTypes} from '../budget/BudgetType'
  
   const payementTypes =new GraphQLObjectType({
    name: 'Payement',
    fields: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      montant: {
        type: GraphQLInt
      },    
      mois:{
          type:GraphQLString
      },
      paidBy:{
        type:userTypes,
      },
      budgetAnnee:{
        type :budgetTypes
      }
     
    }
  });




   const payementInputType = new GraphQLInputObjectType({
	name: 'PaymentInput',
	fields: () => ({
    montant: {
      type: GraphQLInt
    },    
    mois:{
        type:GraphQLString
    },
   
	})
})


export{payementTypes ,payementInputType};