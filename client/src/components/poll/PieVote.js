/* import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gql, graphql } from 'react-apollo';
//mport '../index.css'





class Pies extends React.Component {
  


render() {
    console.log(this.props)
  

if(this.props.data.loading){
return(<div>loading ...</div>) }
else{
    var x = (this.props.data.getbudgetByAnnee.caisse * 100)/ this.props.data.getbudgetByAnnee.budgetActuel;
    var y = (this.props.data.getbudgetByAnnee.depense * 100)/ this.props.data.getbudgetByAnnee.budgetActuel;

    const data = {
        labels: [
            'Caisse',
            'Depence'],
        datasets: [{
            data: [x, y],
            backgroundColor: [
                '#8E8684',
                '#36A2EB'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB']
        }]
    };
    return (
        <div className="row ">
            <div className=" col-md-6 col-sm-6 col-xs-12 ">
                <div className="card">
                    <div className="card-title">
                        <div className="card bg-info text-white">
                            <div className="card-body"><center>Budget atteint {this.props.data.getbudgetByAnnee.budgetActuel}  DT</center></div>
                        </div>


                        <div className="card-body">



                            <Doughnut data={data}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'variation depense et caisse par rapport budget atteint'

                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            


        </div>

    );
}
}

};


export const BudgetQuery = gql`
query BudgetQuery($annee: Int!) {
    getbudgetByAnnee(annee:$annee) {
      _id
      annee
      budgetDdesire
      budgetActuel
      depense
      caisse
      
      
    }
  }
`;

//export default Pies ;

export default graphql(BudgetQuery, {
    options: { variables: { annee: 2018 } },
})(Pies);   
 */

/* 
import React from 'react';
import {Pie} from 'react-chartjs-2';
import { gql, graphql } from 'react-apollo';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class PieVotes extends React.Component {


  render() {
    console.log(this.props)
  

    if(this.props.data.loading){
    return(<div>loading ...</div>) }
    else{
    return (
      <div>
        <Pie data={data} />
      </div>
    );
}
  }
};


export const PollQuery = gql`
  query PollLists {
    PollLists {
        
        options {
          text
          votes
        }
      
        
      }
  }
`;
export default  graphql(PollQuery)(PieVotes); */






import React from 'react';

import { PieChart, Pie, Sector, Cell }  from 'recharts';
const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    class SimplePieChart extends React.Component {
	render () {
  	return (
    	<PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          cx={300} 
          cy={200} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    );
  }
}
export default SimplePieChart