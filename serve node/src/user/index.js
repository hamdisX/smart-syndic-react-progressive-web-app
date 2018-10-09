

import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';

 import queries from './UserQueries';
import mutations from './UserMutations'; 


export default new GraphQLSchema({

    query: new GraphQLObjectType({
		name: 'Query',
		fields: queries
    }),
     mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: mutations
	})
     
     

});