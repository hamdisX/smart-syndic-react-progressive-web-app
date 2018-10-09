




import React from 'react';





class logout extends React.Component{
    render(){
        return(
            localStorage.log='false',
            window.location.reload(),
            console.log('logout')
        )
    }
}

export default logout;
