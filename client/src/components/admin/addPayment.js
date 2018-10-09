import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import { InputLabel } from 'material-ui/Input';
import { InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';


import Dialog from 'material-ui/Dialog';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
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
    }, textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});


const currencies = [
    { value: 'janvier '+localStorage.annee,  label: 'janvier',},
    {value: 'février '+localStorage.annee,label: 'février',},
    {value: 'mars'+localStorage.annee,label: 'mars',},
    {value: 'avril'+localStorage.annee,label: 'avril',}, 
    {value: 'mai'+localStorage.annee,label: 'mai',},
    { value: 'juin'+localStorage.annee, label: 'juin',},
    { value: 'juillet'+localStorage.annee  ,label: 'juillet',},
    {value: 'aout'+localStorage.annee,   label: 'aout',},
    {value: 'septembre'+localStorage.annee,   label: 'septembre',}, 
    {value: 'octobre'+localStorage.annee,   label: 'octobre',},
    {value: 'novembre'+localStorage.annee,   label: 'novembre',},
    {value: 'decembre'+localStorage.annee,   label: 'decembre',},

];

const users=[
    { value: 'wissem bn romdhane ',  label: 'wissem bn romdhane',},
    { value: 'raouef mnif ',  label: 'raouef mnif ',},
    { value: 'zied jawedi ',  label: 'zied jawedi ',},
    { value: 'hamdi miled ',  label: 'hamdi miled ',},
    { value: 'rym masmoodi ',  label: 'rym masmoodi ',},
    { value: 'mohamed slaymi ',  label: 'mohamed slaymi ',},
    { value: 'majdi kaanich ',  label: 'majdi kaanich ',},
   
    
]


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class AddPay extends React.Component {

    state = {
        montant: null,
        annee: 2018,
        mois:'janvier',
        open: false,
        user:''

    };


    handleChange1 = event => {
        this.setState({ montant: event.target.value });

    };

    handleChange2 = event => {
        this.setState({ annee: event.target.value });
        localStorage.annee = this.state.annee;
    };

    handleChange3 = event => this.setState({ mois: event.target.value });

    handleChange4 = event => this.setState({ user: event.target.value });



 


    handleSave = ({ mutate }) => {
        const { mois, montant} = this.state;
        this.props.mutate({
            variables: { mois, montant }
        }).then(res => {
            this.setState({
                montant: '',
                mois:"",
                user:""

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
        localStorage.annee = this.state.annee;
        return (
            <Paper>
                <br />

                <div className={classes.container}>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="select-user"
                            select
                            label="Select"
                            className={classes.textField}
                            value={this.state.user}
                            onChange={this.handleChange4}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Please select name"
                            margin="normal"
                        >
                            {users.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>





                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-simple">Montant</InputLabel>
                        <Input

                            value={this.state.montant}
                            type="number"
                            onChange={this.handleChange1}
                            className={classes.input}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="name-simple">Annee</InputLabel>
                        <Input
                            value={this.state.annee}
                            type="number"
                            onChange={this.handleChange2} className={classes.input}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <TextField
                            id="select-currency"
                            select
                            label="Select"
                            className={classes.textField}
                            value={this.state.mois}
                            onChange={this.handleChange3}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Please select month"
                            margin="normal"
                        >
                            {currencies.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>






                </div>
                <Button variant="raised" size="large" color="primary" className={classes.button} onClick={this.handleSave}
                >
                    Add Payment
        </Button>


            </Paper>

        );
    }
}

AddPay.propTypes = {
    classes: PropTypes.object.isRequired,
};


export const PaymentMutation = gql`
  mutation PaymentMutation($mois:String!,$montant:Int!) {
    paymentadd(mois : $mois,montant:$montant) {
      
      montant
      mois
                     
    }
  }
`;








export default graphql(PaymentMutation)
    (withStyles(styles)(AddPay));

