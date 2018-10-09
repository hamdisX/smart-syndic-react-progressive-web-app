
import React from 'react';
import { gql, graphql } from 'react-apollo';




const budget  = ({ data: { loading, getbudget }}) => {
  if (loading) {
    return <p>Loading...</p>
  }
  
  return (
    <ul>
      { getbudget.annee}
    </ul>
  );
}
export const BudgetQuery = gql`
  query BudgetQuery($id: ID!) {
    getbudget(id:$id) {
      _id
      annee
      budgetDdesire
      budgetActuel
      depense
      caisse
      
      
    }
  }
`;

export default graphql(BudgetQuery, {
  options: { variables: { id:"5ae0c38aed3f1e1859fffcb8" } },
})(budget);