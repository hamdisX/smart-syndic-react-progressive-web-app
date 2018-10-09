import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt
   
  } from 'graphql';
  import budgetModel from './BudgetSchema';
  import {budgetTypes,chartTypes} from './BudgetType';
  export default {
    BudgetLists: {
        type: new GraphQLList(budgetTypes),
        resolve: budgetModel.getBudget
      },




    getbudget:{
      type: budgetTypes,
      args: {
        id: {
          name: 'ID',
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(root, params) {
        return budgetModel.findById(params.id).exec();
      }

    },

     getbudgetByAnnee:{
        type: budgetTypes,
        args: {
        annee: {
          name: 'Annee',
          type: GraphQLInt,
      }
        },
        resolve(root, args) {
        return budgetModel.findOne({annee :args.annee}).exec();
      }



    }


 

  }; 

    
  