
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,

} from 'graphql';
import GraphQlDate from 'graphql-date';
import GraphQLObjectId from 'graphql-scalar-objectid'
import { userTypes } from '../user/UserType';
import { optionTypes,optionInputType } from './optionType';


const pollTypes = new GraphQLObjectType({
  name: 'poll',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: GraphQLString
    },

    options: {
      type: new GraphQLList(optionTypes),
    },
    createdBy: {
      type: userTypes,
    },
    date: {
      type: GraphQlDate
    }

  }
});

const voteTypes = new GraphQLObjectType({
  name: 'vote',
  fields: {
    vt: {
      type: GraphQLString
    },

  }
});

export { pollTypes , voteTypes};