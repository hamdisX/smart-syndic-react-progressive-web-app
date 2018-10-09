
import React from 'react';
import Pie from './tresorie/pie';
import Claim from './claim/claim'

class Home extends React.Component {
    render(){
        return(
            <div>
            <Pie />
            <Claim/>
            </div>
        );
    }
}

export default Home;
