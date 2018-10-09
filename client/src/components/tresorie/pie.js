import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gql, graphql } from 'react-apollo';
import './index.css'
import Loading from '../loading';
import PieOffline from './pieOff';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Bdg from './paper';





class Pies extends React.Component {

    render() {

      
        const { classes } = this.props;

        if (window.navigator.onLine == false){
            return (<PieOffline />)
          }
          else{

        if (this.props.data.loading) {
            return (<Loading />)
        }
        else {
            var x1 = (this.props.data.getbudgetByAnnee.caisse * 100) / this.props.data.getbudgetByAnnee.budgetActuel;
            var y1 = (this.props.data.getbudgetByAnnee.depense * 100) / this.props.data.getbudgetByAnnee.budgetActuel;
            var y= y1.toFixed(2) ;
            var x= x1.toFixed(2) ;
            localStorage.y1 = y;
            localStorage.x1=x;
            localStorage.budgetActuel=this.props.data.getbudgetByAnnee.budgetActuel 
            const data = {
                labels: [
                    'Caisse %',
                    'Depence %'],
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


            const data2 = {
                labels: [
                    'budgetDdesire %',
                    'budgetActuel %'],
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
                <div className="row pie">
                    <div className=" col-md-4 col-sm-4 col-xs-12 ">
                        <div className="card">
                            <div className="card-title">
                                <div className="card bg-info text-white">
                                    <div className="card-body"><center>Budget atteint {this.props.data.getbudgetByAnnee.budgetActuel}  DT</center></div>
                                </div>


                                <div className="card-body">



                                    <Doughnut data={data}
                                        options={{
                                            title: {
                                                display: false,
                                                text: 'variation depense et caisse par rapport budget atteint'

                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" col-md-4 col-sm-4 col-xs-12 ">
                        <div  className="card pie " >
                            <div className="card-title">
                            <div className="card bg-info text-white">
                                    <div className="card-body"><center>Budget desirer {this.props.data.getbudgetByAnnee.budgetDdesire}  DT</center></div>
                                </div>
                                <div className="card-body">
                                    <Pie data={data2}

                                        options={{
                                            title: {
                                                display: false,
                                                text: "<h1>Predicted world population (millions) in 2050</h1>"
                                            }
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <span className=" col-md-4 col-sm-4 col-xs-12 ">
                        <Bdg />
                    </span>
                    

                </div>

            );
        } }
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