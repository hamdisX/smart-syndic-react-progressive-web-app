import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Bdg from './paper';





class PiesOff extends React.Component {

    render() {

      

       
       

            
            var y= localStorage.y1 ;
            var x= localStorage.x1; 
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
            return (
                <div className="row pie">
                    <div className=" col-md-4 col-sm-4 col-xs-12 ">
                        <div className="card">
                            <div className="card-title">
                                <div className="card bg-info text-white">
                                    <div className="card-body"><center>Budget atteint  { localStorage.budgetActuel}  DT</center></div>
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
                                </div>        
                                           <div className="card-body">

                                    <Pie data={data}

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
                    </span>
                    

                </div>

            );
        
    }

};





export default PiesOff