



import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import Claimqueries from './claim/ClaimQueries';
import Claimmutations from './claim/ClaimMutations';
import Userqueries from './user/UserQueries';
import Usermutations from './user/UserMutations';
import Budgetqueries from './budget/BudgetQueries';
import Budgetmutations from './budget/BudgetMutations';
import Paymentmutation from './payement/PayementMutations';
import Payementqueries from './payement/PayementQueries';
import Depensequeries from './depenses/DepensesQueries';
import Depensemutation from './depenses/DepensesMutations';
import Typedepmutation from './typedepenses/Type_depmutation';
import Typedepqueries from './typedepenses/type_depqueries';
import PollMutation from './polls/pollMutations';
import PollQueries from './polls/pollQueries'


export default new GraphQLSchema({

    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({ ...Claimqueries, ...Userqueries, 
            ...Budgetqueries, ...Payementqueries, ...Depensequeries,...Typedepqueries,...PollQueries })
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({ ...Claimmutations, ...Budgetmutations,
             ...Usermutations, ...Paymentmutation, ...Depensemutation, ...PollMutation })
    })
})