import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLInputObjectType
} from 'graphql';
import GraphQlDate from 'graphql-date';


const optionTypes = new GraphQLObjectType({
    name: 'Option',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        text: {
            type: GraphQLString
        },

        votes: {
            type: GraphQLInt
        },

    }
});


const optionInputType = new GraphQLInputObjectType({
    name: 'OptionInput',
    fields: () => ({
        text: {
            type: GraphQLString
        },


    })
})

export { optionTypes,optionInputType};