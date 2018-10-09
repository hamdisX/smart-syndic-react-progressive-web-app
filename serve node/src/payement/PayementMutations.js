
import {
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLInt
} from 'graphql';
import GraphQlDate from 'graphql-date';

import {userTypes} from '../user/UserType';
import {budgetTypes} from '../budget/BudgetType';

import GraphQLObjectId from 'graphql-scalar-objectid'
import { payementTypes ,payementInputType } from './PayementType';
import payementModel from './PayementSchema';

export default {
	paymentadd: {
		type: payementTypes,
		args: {
			montant: {
				name: 'montant',
				type: GraphQLInt
			},
			mois: {
				name: 'mois',
				type: GraphQLString
			},
			paidBy:{
				name:'paidBy',
				type: GraphQLObjectId,
				ref :"user"
			},
			budgetAnnee:{
				name:"budgetAnnee",
				type: GraphQLObjectId,
				ref :"budget"
			}
		},
		resolve: payementModel.addpayment
	},

	
};




