import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Grid from 'material-ui/Grid';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import Loading from '../loading';
import { gql, graphql, compose } from 'react-apollo';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import VoteChart from './BarChart'



const styles = theme => ({

    anchor: {
        backgroundColor: green[500],
        width: 10,
        height: 10,
        borderRadius: '50%',
        position: 'absolute',
    },
    checked: {},
    button: {
        margin: theme.spacing.unit,
    },

    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    chart: {
        display: 'none'
    }
});



class Poll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vt: '0',
            showComponent: false,
            vote:localStorage.vote
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }
    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    handleSave = ({ mutate }) => {
        console.log(this.state)

        const { vt } = this.state;
        this.props.mutate({
            variables: { vt }
        })
            .then(res => {
                localStorage.vote=false;
                this.setState({
                    vt: '2',
                    vote:localStorage.vote


                });
            });
         console.log(this.state.vote)   
    this._onButtonClick() 
            

    }

    handleChange = key => (event, value) => {
        this.setState({
            vt: value,
            [key]: value,

        });
        console.log(value)

    };





    anchorEl = null;

    render() {
        localStorage.setItem('poll', JSON.stringify(this.props.data.Getpol))


        const { classes } = this.props;
        if (this.props.data.loading) {
            return (<Loading />)
        }

        else {

            var i = -1;

         if(localStorage.vote=="true"){

            return (
                <div>

                    <Paper className={classes.root} elevation={4}>


                        <Grid container spacing={16}>

                            <Grid item xs={12} sm={6}>


                                <FormControl component="fieldset" >

                                    <FormLabel component="legend"> {this.props.data.Getpoll.title}</FormLabel>
                                    <RadioGroup
                                        aria-label="transformOriginVertical"
                                        name="transformOriginVertical"
                                        value={this.state.transformOriginVertical}
                                        onChange={this.handleChange('transformOriginVertical')}
                                    >
                                        {this.props.data.Getpoll.options.map(n => {
                                            { i = i + 1 }
                                            return (

                                                <FormControlLabel key={n.id} value={i.toString()}
                                                    control={<Radio color="primary" />} label={n.text}
                                                />
                                            )
                                        }
                                        )}
                                    </RadioGroup>
                                </FormControl>

                            </Grid>
                                
                               <Button variant="raised"  color="primary" className={classes.button}
                                onClick={this.handleSave}
                            >
                                Vote
                            </Button> 
                            
                              
                         {this.state.showComponent ?
                                <VoteChart />
                                :
                                null
                            }




                        </Grid>
                    </Paper>

                </div>
            ); }

            else{
                return (
                    <div>
    
                        <Paper className={classes.root} elevation={4}>
    
    
                            <Grid container spacing={16}>
    
                                <Grid item xs={12} sm={6}>
    
    
                                    <FormControl component="fieldset" >
    
                                        <FormLabel component="legend"> {this.props.data.Getpoll.title}</FormLabel>
                                        <RadioGroup
                                            aria-label="transformOriginVertical"
                                            name="transformOriginVertical"
                                            value={this.state.transformOriginVertical}
                                            onChange={this.handleChange('transformOriginVertical')}
                                        >
                                            {this.props.data.Getpoll.options.map(n => {
                                                { i = i + 1 }
                                                return (
    
                                                    <FormControlLabel key={n.id} value={i.toString()}
                                                        control={<Radio color="primary" />} label={n.text}
                                                    />
                                                )
                                            }
                                            )}
                                        </RadioGroup>
                                    </FormControl>
    
                                </Grid>
                                    
                                   <Button disabled variant="raised"  color="primary" className={classes.button}
                                    
                                >
                                    Vote
                                </Button> 
                                
                                  
                             {this.state.showComponent ?
                                    <VoteChart />
                                    :
                                    null
                                }
    
    
    
    
                            </Grid>
                        </Paper>
    
                            </div> )
            }
        }
    }
}


Poll.propTypes = {
    classes: PropTypes.object.isRequired,
};


export const PollQuery = gql`
  query Getpoll {
    Getpoll {
        _id
        title
        date
        options {
          _id
          text
          votes
        }
        createdBy {
          firstName
          lastName
        }
        
      }
  }
`;

export const PollMutation = gql`
mutation PollMutation($vt: String!) {
    VoteAdd(vt:$vt) {
        vt
      }
  }
`;


export default compose(
    graphql(PollQuery),
    graphql(PollMutation),
)(withStyles(styles)(Poll));

