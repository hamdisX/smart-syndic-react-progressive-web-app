import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { gql, graphql,compose } from 'react-apollo';
import  {Redirect} from 'react-router-dom';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AccountCircle from 'material-ui-icons/AccountCircle';




const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});


class Login extends Component {
  state = {
    telephone: '',
    password: '',
    name:''

  }
  handleSave = ({ mutate }) => {
    const { telephone, password } = this.state;
    
    this.props.mutate({
      variables: { telephone, password }
    })
      .then(res => {
        
        localStorage.setItem('telephone', telephone)
        localStorage.setItem('log', 'true')
        localStorage.setItem('vote', true)

        
        this.renderRedirect();
      window.location = "http://localhost:8080";
       

      });
      

  }
   
  renderRedirect = () => {
    
        console.log('test');
       <Redirect to='/test1'/>
    
  }

  render() {
   
    


    return (
      <div className='paperOut'>
        <Paper className='paperIn'>
        <h4 className='mv3'>
          Login
        </h4>
        <div className='flex flex-column'>


            <div >
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" 
            type='number'
              id='email'
              value={this.state.telephone}
              onChange={e => this.setState({ telephone: e.target.value })}
              label='Your telephone'
            />
          </Grid>
        </Grid>
      </div>



          <TextField
            id='password'
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            type='password'
            label='Password'
          />

        </div>
        <div className='flex mt3'>
        <br/>
          <Button variant='raised'size="large" color="primary" onClick={this.handleSave}  >
            Ok

          </Button>

        
          
          {this.renderRedirect()}
        </div>
        <br/><br/><br/>
      </Paper>
      </div>
    )
  }
 
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};





  
export const LOGINmutation = gql`
mutation LOGINmutation ($telephone: Int!, $password: String!){
          Login(telephone:$telephone,password: $password) {
          
            telephone
          password
          _id
       
       
     }
   }
   `;








export default graphql(LOGINmutation)(withStyles(styles)(Login)); 
