

import React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';




 const styles = theme => ({ 
  DashboardContainer: { 
    width : '100%',
    bottom : 0 ,
    position : 'fixed' ,
    padding : 0,
  }, 

}); 

 class IconLabelTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    var style = {
      width : '100%',
    bottom : 0 ,
    position : 'fixed' 
    };
    return (
      <div style={style}>
      <Paper style={{ width: "100%" }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
         
        >
          <Tab icon={<PhoneIcon />} label="RECENTS" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBYs" 
           onclick="alert('I am  alert box!')"
          />
        </Tabs>

      </Paper>

      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(IconLabelTabs);
