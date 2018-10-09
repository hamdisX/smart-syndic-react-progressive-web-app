
import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import { gql, graphql } from 'react-apollo';




class VoteChart extends React.Component {

  render() {

 
    console.log(this.props)
    if(this.props.data.loading){
    return(<div>loading ...</div>) }
    else{
        var x=[];
        var y=[];

        {this.props.data.Getpoll.options.map(n => {
            return(
                x.push(n.text),
                y.push(n.votes)
            )} 
        )}


        const data = {
            labels: [...x],
            datasets: [
              {
                label: "vote " ,
                backgroundColor: "#729FCF",
                borderColor: '#729FCF',
                borderWidth: 1,
                hoverBackgroundColor: '#3465A4',
                hoverBorderColor: '#204A87',
                data: [...y]
              }
            ]
          };
    return (
        <div>
          
        <HorizontalBar data={data} />
      </div>
    );
  }}
};



export const PollQuery = gql`
  query Getpoll {
    Getpoll {
        title
        options {
          text
          votes
        }
      
        
      }
  }
`;
export default  graphql(PollQuery)(VoteChart);
