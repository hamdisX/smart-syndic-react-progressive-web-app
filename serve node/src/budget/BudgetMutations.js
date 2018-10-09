

import {
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLInt
} from 'graphql';
import { budgetInputType, budgetTypes } from './BudgetType';
import BudgetModel from './BudgetSchema';

export default {
	addBudget: {
		type: budgetTypes,
		args: {
			data: {
				name: 'data',
				type: new GraphQLNonNull(budgetInputType)
			}
		},
		resolve: BudgetModel.addbudget
	},
	

	removeBudget: {

		type: budgetTypes,
		args: {
			id: {
				name: 'id',
				type: new GraphQLNonNull(GraphQLID)
			}
		},
		resolve: BudgetModel.removeBudget
	},


	updateBudget: {
		type: budgetTypes,
		args: {
			id: {
				name: 'ID',
				type: new GraphQLNonNull(GraphQLID)
			},
			data: {
				name: 'data',
				type: new GraphQLNonNull(budgetInputType)
			}
		},
		resolve: BudgetModel.updateBudget
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
        return BudgetModel.findById(params.id).exec();
      }

    },

   


};




