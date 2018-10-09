
import {
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLInt
} from 'graphql';

import GraphQLObjectId from 'graphql-scalar-objectid'
import { DepInputType, DepenseTypes } from './DepensesType';
import DepModel from './DepensesSchema';

export default {
	depadd: {
		type: DepenseTypes,
		args: {
			description: {
				name: 'description',
				type: GraphQLString
			},
			montant: {
				name: 'montant',
				type: GraphQLInt
			},
			type_dep:{
				name:'type_dep',
				type: GraphQLObjectId,
				ref :"type_dep"
			},
			budget_dep:{
				name:'budget_dep',
				type: GraphQLObjectId,
				ref :"budget"
			}
		},
		resolve: DepModel.addDep
	},


};




