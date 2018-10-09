import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
    GraphQLString
  } from 'graphql';
  import pollModel from './pollSchema';
  import {pollTypes} from './pollTypes';
  export default {
    PollLists: {
      type: new GraphQLList(pollTypes),
      resolve: pollModel.getAllPoll 
    },
    Getpoll:{
      type: pollTypes,
      resolve:pollModel.getPOLL
    }
  }; 

