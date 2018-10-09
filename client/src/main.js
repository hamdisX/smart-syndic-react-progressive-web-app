

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './Auth/App';
import App from './containers/App2';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { BrowserRouter } from 'react-router-dom';
//import App from './Auth/Dash'

ReactDOM.render(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root'));


