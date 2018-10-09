

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Phone from 'material-ui-icons/Phone';




const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 5,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    dolar: {
        color: "rgb(49, 112, 143)",
        fill: "currentcolor",
        height: 54,
        width: 54,
        float: "right",
        paddingRight: 15,
        paddingBottom: 5,

    },
    bdg: {
        color: "cadetblue",
        fontSize: 24,
        fontWeight: 520,
    },
    nom: {
        color: "cadetblack",
        fontSize: 24,
        fontWeight: 520,
    },
    act: {
        color: "#495057"
    }


});

    class Contact extends React.Component {

        render() {
            const { classes } = this.props;
            
    return (
        <div>
                            <br/><br/><br/>


            <Paper className={classes.root} elevation={4} >

                <Typography variant="headline" component="h3" className={classes.act}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact Syndic
        </Typography>
                <Typography component="p">
                    <span >  <br></br>
                    <span className={classes.nom}>&nbsp;Hamdi &nbsp;</span><span className={classes.bdg} > 50 428 138 </span>
                    <Phone  className={classes.dolar}/>
                    </span>
                    <br/><br/><br/>

                </Typography>
                <Typography component="p">
                    <span  >  <br></br>
                    <span className={classes.nom}>&nbsp;Majdi &nbsp;</span><span className={classes.bdg} > 50 000 000 </span>
                    <Phone  className={classes.dolar}/>
                    </span>

                </Typography>
                <br/><br/><br/>

            </Paper>
            
        </div>
    );
}
} 


Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};






export default withStyles(styles)(Contact);   
