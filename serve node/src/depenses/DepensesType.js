
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
import {budgetTypes} from '../budget/BudgetType' ;
import {TypeDepTypes} from '../typedepenses/type_depType'


   const DepenseTypes =new GraphQLObjectType({
    name: 'depense',
    fields: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      description: {
        type: GraphQLString
      },
      
      montant:{
          type:GraphQLInt
      },
      type_dep:{
        type:TypeDepTypes,
      },
      budget_dep:{
        type :budgetTypes
      },
      date:{
        type :GraphQlDate
      }
     
    }
  });




   const DepInputType = new GraphQLInputObjectType({
	name: 'depInputType',
	fields: () => ({
    description: {
			type: GraphQLString
		},
		montant: {
			type: GraphQLInt
    },
   
	})
})


export{DepenseTypes ,DepInputType};