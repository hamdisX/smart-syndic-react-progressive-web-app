
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Archive from 'material-ui-icons/Archive';
import Loading from '../loading';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import {DialogActions,DialogContent,DialogContentText,DialogTitle} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import Update from './update'
import { InputLabel } from 'material-ui/Input';
import {InputAdornment} from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import { FormControl } from 'material-ui/Form';
import Input from 'material-ui/Input';
import UsersOff from './usersOff'

import { gql, graphql, compose } from 'react-apollo';


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    button: {
        margin: theme.spacing.unit,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      input: {
        margin: theme.spacing.unit,
      },
      formControl: {
        margin: theme.spacing.unit,
      },
      celltab:{
        padding: '0px',
      },
});

let id = 0;
function createData(name, calories, fat, carbs) {
    id += 1;
    return { id, name, calories, fat, carbs };
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

class Users extends React.Component {


    state = {
        
        open2: false,
        selectedUser:null,
        firstName: "",
        lastName: "",
        email: "",
        telephone: 0,
        password: "",
        showPassword: false,
        open: false,
        id: '',

    };

    handleChange1 = event => {
        this.setState({ firstName: event.target.value });
      };
      handleChange2 = event => {
        this.setState({ lastName: event.target.value });
      };
      handleChange3 = event => {
        this.setState({ email: event.target.value });
      };
      handleChange4 = event => {
        this.setState({ telephone: event.target.value });
      };
    
      //password
      handleChange = event => {
        this.setState({ password: event.target.value });
      };
    
      handleMouseDownPassword = event => {
        event.preventDefault();
      };
    
      handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
      };
      //password
    
    
      handleSave2 = ({mutate}) => {
        const { firstName, lastName, email, telephone ,password} = this.state;
        const id = localStorage.ids
        this.props.mutate({
          variables: { firstName, lastName, email, telephone ,password,id}
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


       var users =[]
        const { classes } = this.props;

        if (window.navigator.onLine == false){
          return (<UsersOff />)
        }
        else {
        if (this.props.data.loading) {
            return (<Loading />)
        }

        else {

            return (
              
                <div>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell className={classes.celltab}>Name</CustomTableCell>
                                    <CustomTableCell className={classes.celltab} numeric>LastName</CustomTableCell>
                                    <CustomTableCell className={classes.celltab} numeric>Email</CustomTableCell>
                                    <CustomTableCell className={classes.celltab} numeric>Phone</CustomTableCell>
                                    <CustomTableCell className={classes.celltab} numeric>Edit / Delite</CustomTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                  this.props.data.UserLists.map(n => {
                                    users.push(n)
                                    return (
                                      
                                      
                                     
                                        <TableRow className={classes.row} key={n.id}>
                                            
                                            <CustomTableCell className={classes.celltab}>{n.firstName}</CustomTableCell>
                                            <CustomTableCell className={classes.celltab} numeric>{n.lastName} </CustomTableCell>
                                            <CustomTableCell className={classes.celltab} numeric>{n.email}</CustomTableCell>
                                            <CustomTableCell className={classes.celltab} numeric>{n.telephone}</CustomTableCell>
                                            <CustomTableCell className={classes.celltab} numeric>
                                                <Button variant="flat" size="small" color="primary"
                                                 onClick={this.handleClick=()=>{
                                                  return new Promise((resolve, reject) => {
                                                     localStorage.ids=n._id;
                                                     
                                                        this.setState({ 
                                                         id:n._id,
                                                        selectedUser: n,
                                                        firstName:n.firstName,
                                                        lastName:n.lastName,
                                                        email:n.email,
                                                        telephone:n.telephone,
                                                        password:n.password,

                                                     });
                                                     console.log(this.state.selectedUser);
                                                     if(n._id == localStorage.ids){
                                                     this.handleClickOpen();}
                                                    })
                                                    
                                                 }}
                                                >
                                                    Update
                                                  </Button>
                                                <Button variant="flat" size="small" color="secondary" className={classes.button}
                                                    onClick={  this.handleSave = () => {
                                                        this.setState({id:n._id})
                                                        const { id } = this.state;
                                                        if(n._id == this.state.id){
                                                          console.log("test1")
                                                        this.props.deleteMutation({
                                                            variables: { id }
                                                        }).then(res=>{
                                                          console.log("delete")
                                                        });
                                                      }
                                                          
                                                            
                                                        }}
                                                >
                                                    Delete
                                                  </Button>

                                           

                                            </CustomTableCell>
                                        </TableRow>

                                    );


                                })}
                                {localStorage.setItem('users', JSON.stringify(users))}
                            </TableBody>
                        </Table>
                    </Paper>
                    

                <Dialog
          open={this.state.open}
          keepMounted
          transition={Transition}
          

          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
           
          <Paper>
        <br />
        <div className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">FirstName</InputLabel>
            <Input
              label="Name"
              value={this.state.firstName}
              onChange={this.handleChange1}
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">LastName</InputLabel>
            <Input
              value={this.state.lastName}
              onChange={this.handleChange2} className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Email</InputLabel>
            <Input
              type="email"
              value={this.state.email}
              type="mail"
              onChange={this.handleChange3}
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name-simple">Telephone</InputLabel>
            <Input
              value={this.state.telephone}
              onChange={this.handleChange4}
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </FormControl>

           <FormControl className={classes.formControl}>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange}
            className={classes.input}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </div>
        <Button variant="raised" size="large" color="primary" className={classes.button} onClick={this.handleSave2}
        >
          Update
        </Button>
        
     
      </Paper>

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


                </div>

            );


        }
      }
    }
}

Users.propTypes = {
    classes: PropTypes.object.isRequired,
};


export const UserQuery = gql`
  query UserQuery {
    UserLists {
      _id
      firstName
      lastName
      email
      telephone 
      password        
    }
  }
`;




export const Usermutation = gql`
mutation Usermutation ($firstName: String!, $lastName: String!,$email:String,$telephone:Int!,$id:ID!, $password:String!){
  updateUser(firstName: $firstName,lastName: $lastName,email:$email,telephone:$telephone,id:$id,password:$password) {
          _id
          firstName
          lastName
          email
          telephone
          password   
     }
   }
   `;

   export const UserDelete = gql`
   mutation UserDelete ($id:ID!){
       removeUser (id:$id) {
         _id
                
       }
     }
   `;
   


export default compose(
  graphql(UserQuery),

  graphql(UserDelete,{ name: 'deleteMutation' }),
  graphql(Usermutation)
)(withStyles(styles)(Users));










