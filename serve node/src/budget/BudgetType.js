

import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLInt    
  } from 'graphql';
  
  
   const budgetTypes =new GraphQLObjectType({
    name: 'Budget',
    fields: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      annee: {
        type: GraphQLInt
      },
      
      budgetDdesire:{
          type:GraphQLInt
      },
      budgetActuel:{
        type:GraphQLInt

      },
      depense:{
        type:GraphQLInt

      },
      caisse:{
        type:GraphQLInt

      }
    }
  });




   const budgetInputType = new GraphQLInputObjectType({
	name: 'BudgetInput',
	fields: () => ({
        annee: {
            type: GraphQLInt
          },
          
          budgetDdesire:{
              type:GraphQLInt
          },
          budgetActuel:{
            type:GraphQLInt
    
          },
          depense:{
            type:GraphQLInt
    
          },
          caisse:{
            type:GraphQLInt
    
          }
	})
})


   const chartTypes =new GraphQLObjectType({
    name: 'chart',
    fields: {
      
      
      budgetActuel:{
        type:GraphQLInt

      },
      depense:{
        type:GraphQLInt

      },
      caisse:{
        type:GraphQLInt

      }
    }
  });

 



export{budgetTypes ,budgetInputType,chartTypes};