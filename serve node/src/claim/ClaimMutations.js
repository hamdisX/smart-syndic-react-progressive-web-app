
import {
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} from 'graphql';

import {userTypes} from '../user/UserType';
import GraphQLObjectId from 'graphql-scalar-objectid'
import { claimInputType, claimTypes } from './ClaimType';
import ClaimModel from './ClaimSchema';

export default {
	claimadd: {
		type: claimTypes,
		args: {
			object: {
				name: 'object',
				type: GraphQLString
			},
			content: {
				name: 'content',
				type: GraphQLString
			},
			postedBy:{
				name:'postedBy',
				type: GraphQLObjectId,
				ref :"user"
			},
			img:{
				name:'img',
				type: GraphQLString
			}
		},
		resolve: ClaimModel.addclaim
	},

	removeClaim: {

		type: claimTypes,
		args: {
			id: {
				name: 'id',
				type: new GraphQLNonNull(GraphQLID)
			}
		},
		resolve: ClaimModel.removeClaim
	},


	updateClaim: {
		type: claimTypes,
		args: {
			id: {
				name: 'ID',
				type: new GraphQLNonNull(GraphQLID)
			},
			data: {
				name: 'data',
				type: new GraphQLNonNull(claimInputType)
			}
		},
		resolve: ClaimModel.updateClaim
	}

};




