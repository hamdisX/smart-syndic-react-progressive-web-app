import{
    GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLInt

} from 'graphql';

import typeModel from './Type_depSchema';
import {TypeDepTypes,inputTypeDeps} from './type_depType';


export default {
	addtypes :{
		type : TypeDepTypes,
		args:{
			typeDep : {
				name :'type depense',
				type : GraphQLString,
			},
			resolve: typeModel.addtps,

		}
	}
};