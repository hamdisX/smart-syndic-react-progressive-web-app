import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import DollarIcon from 'material-ui-icons/AttachMoney';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import { gql, graphql } from 'react-apollo';
import Loading from '../loading';



const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 5,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    dolar: {
        color: "rgb(49, 112, 143)",
        fill: "currentcolor",
        height: 84,
        width: 84,
        float: "right",
        paddingRight: 15,
        paddingBottom: 5,

    },
    bdg: {
        color: "cadetblue",
        fontSize: 24,
        fontWeight: 520,
    },
    act: {
        color: "#495057"
    }


});

    class PaperSheet extends React.Component {

        render() {
            const { classes } = this.props;
            if (this.props.data.loading) {
        return (<Loading />)
    }
    else {
    return (
        <div>
            <Paper className={classes.root} elevation={4} >
                <DollarIcon className={classes.dolar} />

                <Typography variant="headline" component="h3" className={classes.act}>
                    Budget Actuel
        </Typography>
                <Typography component="p">
                    <span className={classes.bdg} >  <br></br>
                    {this.props.data.getbudgetByAnnee.budgetActuel}&nbsp;DT</span>
                </Typography>
            </Paper>
            <Paper className={classes.root} elevation={4} >
                <ShoppingCartIcon className={classes.dolar} />
                <Typography variant="headline" component="h3" className={classes.act}>
                    Caisse
        </Typography>
                <Typography component="p">
                    <span className={classes.bdg} >  <br></br>
                    {this.props.data.getbudgetByAnnee.caisse} &nbsp;DT</span>
                </Typography>
            </Paper>
        </div>
    );
}
} }


PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};



export const BudgetQuery = gql`
query BudgetQuery($annee: Int!) {
    getbudgetByAnnee(annee:$annee) {
      _id
      
      budgetActuel
      
      caisse
      
      
    }
  }
`;


export default graphql(BudgetQuery, {
    options: { variables: { annee: 2018 } },
})(withStyles(styles)(PaperSheet));   

