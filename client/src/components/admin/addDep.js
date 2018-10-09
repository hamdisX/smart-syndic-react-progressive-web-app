import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import { InputLabel } from 'material-ui/Input';
import {InputAdornment} from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import TextField from 'material-ui/TextField';
import {MenuItem} from 'material-ui/Menu';


import Dialog from 'material-ui/Dialog';
import {DialogActions,DialogContent,DialogContentText,DialogTitle} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';


import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';

import { gql, graphql } from 'react-apollo';



const styles = theme => ({
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
  },textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


const currencies = [
    {
      value: localStorage.type1,
      label: 'charge',
    },
    {
      value: localStorage.type2,
      label: 'charge personel',
    },
 
  ];

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AddDep extends React.Component {

  state = {
    description: "",
    montant:null,
    date: "",
    open: false,
    type_dep: '',
    date:''
    

  };


  handleChange1 = event => {
    this.setState({ type_dep: event.target.value });
    
  };

  handleChange2 = event => this.setState({ description :event.target.value  });


  handleChange3 = event => {
    this.setState({ montant: event.target.value });
  };
  handleChange4 = event => {
    this.setState({ date: event.target.value });
  };



     handleSave = ({ mutate }) => {
    const { description, montant,type_dep} = this.state;
    this.props.mutate({
      variables: { description, montant,type_dep}
    }).then(res => {
      this.setState({
        description: '',
        montant: '',
        type_dep:''

        
      });
    })
      
    this.handleClickOpen()  
  }  


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  


  render() {
    const { classes } = this.props;

    return (
      <Paper>
        <br />

        <div className={classes.container}>
        <FormControl className={classes.formControl}>
        <TextField
          id="select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.type_dep}
          onChange={this.handleChange1}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your type de depense"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>



          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Description</InputLabel>
            <Input
              value={this.state.description}
              type="string"
              onChange={this.handleChange2} className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Montant</InputLabel>
            <Input
              
              value={this.state.montant}
              type="number"
              onChange={this.handleChange3}
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <Input
            type="date"
              value={this.state.date}
              onChange={this.handleChange4}
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </FormControl>

           <FormControl className={classes.formControl}>
          <InputLabel htmlFor="adornment-password"> ' Add Facture</InputLabel>
          <Input
            id="adornment-password"
            type="file"
            className={classes.input}
            endAdornment={
              <InputAdornment position="end">
               
              </InputAdornment>
            }
          />
        </FormControl>


        


        </div>
        <Button variant="raised" size="large" color="primary" className={classes.button} onClick={this.handleSave} 
        >
          Add Depense
        </Button>
        
    
      </Paper>

    );
  }
}

AddDep.propTypes = {
  classes: PropTypes.object.isRequired,
};


export const DepenseMutation = gql`
  mutation DepenseMutation($description:String!,$montant:Int!,$type_dep:ObjectId!) {
    depadd(description : $description,montant:$montant,type_dep:$type_dep) {
      
      description
      montant
      type_dep{
        depType
      }
        
        
                    
    }
  }
`;








export default graphql(DepenseMutation)
  (withStyles(styles)(AddDep));

