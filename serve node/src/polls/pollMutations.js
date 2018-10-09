import {
	GraphQLNonNull,
	GraphQLString,
    GraphQLID,
	GraphQLList,
	GraphQLInt
} from 'graphql';

import {userTypes} from '../user/UserType';
import {optionTypes,optionInputType} from './optionType';
import GraphQLObjectId from 'graphql-scalar-objectid'
import { pollTypes,voteTypes} from './pollTypes';
import PollModel from './pollSchema';

export default {
	Polladd: {
		type: pollTypes,
		args: {
			title: {
				name: 'title',
				type: GraphQLString
			},
			options: {
				name: 'options',
                type:  new GraphQLList(optionInputType),
                

			},
			createdBy:{
				name:'createdBy',
				type: GraphQLObjectId,
				ref :"user"

			}
		},
		resolve: PollModel.addpoll
	},

	VoteAdd:{
		type: voteTypes,
		args: {
			vt: {
				name: 'vt',
				type:GraphQLString
			},},
		resolve : PollModel.addVote
	}


};