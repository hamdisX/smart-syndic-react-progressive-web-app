
import React from 'react';
import Users from './updateUsers' 
import AddButtons from './addButtons'


class Admin extends  React.Component {

    render(){

        return(

           <div>
               <AddButtons/>
                <Users/>
           
           </div>

        )
    }
}

export default (Admin) 