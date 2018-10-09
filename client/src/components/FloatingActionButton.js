import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Icon from 'material-ui/Icon';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
   

  },
});

class FloatingActionButtons extends React.Component {
    render(){
  const { classes } = this.props;
  return (
    <div>
      <Button  variant="fab" color="primary" aria-label="add" className={classes.button} onClick={this.props.greet} >
        <AddIcon />
      </Button>
     
    </div>
  );
}



};


export default withStyles(styles)(FloatingActionButtons);