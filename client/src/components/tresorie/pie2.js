import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Caisse',
        'Depence'],
    datasets: [{
        data: [50, 50],
        backgroundColor: [
            '#8E8684',
            '#36A2EB'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB']
    }]
};




class Pies extends React.Component {
    render() {
        return (
            <div>
                <center>Budget atteint 7800 DT</center>





                <Doughnut data={data}
                    options={{
                        title: {
                            display: true,
                            text: 'variation depense et caisse par rapport budget atteint'
                        }
                    }}
                />

                <center>Budget atteint 7800 DT</center>


                <Doughnut data={data}

                    options={{
                        title: {
                            display: true,
                            text: "<h1>Predicted world population (millions) in 2050</h1>"
                        }
                    }}
                />

            </div>


        );
    }
};

export default Pies