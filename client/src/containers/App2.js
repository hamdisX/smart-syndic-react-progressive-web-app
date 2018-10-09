


import React, { Component } from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import ResponsiveDrawer from './ResponsiveDrawer';
import AdminDashbord from './AdminDashbord';

import Login from "../components/auth/Login"

//import AppBarExampleIcon from "./Appbar"
import { BrowserRouter ,  Redirect} from 'react-router-dom';
//import {Router, Route, browserHistory, IndexRoute} from "react-router";

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:5000/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

class App extends Component {
  render() {
    const isLogin =  localStorage.log
    if(isLogin != "true")
    {
    return(
      <div>
        <ApolloProvider client={client}>
        <BrowserRouter >
        <div>
        <ResponsiveDrawer />
        <Login/>
        </div>
        </BrowserRouter >
      </ApolloProvider>
      </div>
    );
  }
    else
    {
      if(localStorage.telephone==50000000 || localStorage.telephone==50428138){
      return( 
      <div>
        <ApolloProvider client={client}>
        <BrowserRouter >
        <div>
        <AdminDashbord />
        </div>
        </BrowserRouter >
      </ApolloProvider>
      </div>
      );}
      else{
        return( 
          <div>
            <ApolloProvider client={client}>
            <BrowserRouter >
            <div>
            <ResponsiveDrawer />
            </div>
            </BrowserRouter >
          </ApolloProvider>
          </div>
          );
      }


   
   }
 
    
  
  
  }
}

export default App;
