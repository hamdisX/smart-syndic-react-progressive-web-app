

import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';

 import queries from './BudgetQueries';
import mutations from './BudgetMutations'; 


export default new GraphQLSchema({

    query: new GraphQLObjectType({
		name: 'Query',
		fields: queries
    }),
     mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: mutations
    })
})