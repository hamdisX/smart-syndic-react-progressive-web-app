import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import {DialogActions,DialogContent,DialogContentText,DialogTitle} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import AddUser from './addUser'
import AddDep from './addDep'
import AddPay from './addPayment'
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
const styles = theme => ({

  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class AddButtons extends React.Component {

  state={
    open: false,
    open2: false,
    open3:false
  }


  handleClickOpen = () => {
    this.setState({ open: true });
    console.log(this.state.open)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickOpen2 = () => {
    this.setState({ open2: true });
    console.log(this.state.open2)
  };
  handleClickOpen3 = () => {
    this.setState({ open3: true });
    console.log(this.state.open3)
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };
  handleClose3 = () => {
    this.setState({ open3: false });
  };


  render(){
    const { classes } = this.props;
  return (
    <div>
      <Button variant="raised" className={classes.button} onClick={this.handleClickOpen}>
        Add User
      </Button>
      <Button variant="raised" color="primary" className={classes.button} onClick={this.handleClickOpen2}>
         Depense
      </Button>
      <Button variant="raised" color="secondary" className={classes.button} onClick={this.handleClickOpen3}> 
         Payment
      </Button>
      
      <Dialog
          open={this.state.open}
          keepMounted
          transition={Transition}
          

          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <AddUser/>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              OK
            </Button>
            
          </DialogActions>
        </Dialog>


        <Dialog
          open={this.state.open2}
          keepMounted
          transition={Transition}
          

          onClose={this.handleClose2}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <AddDep/>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose2} color="primary">
              OK
            </Button>
            
          </DialogActions>
        </Dialog>


            <Dialog
          open={this.state.open3}
          keepMounted
          transition={Transition}
          

          onClose={this.handleClose3}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <AddPay/>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose3} color="primary">
              OK
            </Button>
            
          </DialogActions>
        </Dialog>
     
    </div>
  );
}
}

AddButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButtons);
