import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Archive from 'material-ui-icons/Archive';
import Loading from '../loading';
import moment from 'moment'
import Pie from './pieOff'




import { gql, graphql } from 'react-apollo';


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
});

let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat, carbs };
}



class DepensesOffline extends React.Component {



  render() {
    const { classes } = this.props;



      return (
        <div>
            <Pie/>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Charge</CustomTableCell>
                  <CustomTableCell numeric>Montant</CustomTableCell>
                  <CustomTableCell numeric>Date</CustomTableCell>
                  <CustomTableCell numeric>Facture</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {JSON.parse(localStorage.getItem("abc") || "[]").map(n => {
                
                    return (

                      <TableRow className={classes.row} key={n.id}>
                        <CustomTableCell>{n.description}</CustomTableCell>
                        <CustomTableCell numeric>{n.montant} DT</CustomTableCell>
                        <CustomTableCell numeric>{moment(n.date).format('MMMM Do YYYY, h:mm a')}</CustomTableCell>
                        <CustomTableCell numeric><Archive /></CustomTableCell>
                      </TableRow>

                    );
                  

                })}
             

              </TableBody>
            </Table>
          </Paper>
          <br />
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Charge</CustomTableCell>
                  <CustomTableCell numeric>Montant</CustomTableCell>
                  <CustomTableCell numeric>Date</CustomTableCell>
                  <CustomTableCell numeric>Facture</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {JSON.parse(localStorage.getItem("abc2") || "[]").map(n => {
                    return (

                      <TableRow className={classes.row} key={n.id}>
                        <CustomTableCell>{n.description}</CustomTableCell>
                        <CustomTableCell numeric>{n.montant} DT</CustomTableCell>
                        <CustomTableCell numeric>{moment(n.date).format('MMMM Do YYYY, h:mm a')}</CustomTableCell>
                        <CustomTableCell numeric><Archive /></CustomTableCell>
                      </TableRow>

                    );
                  }

                )}
              </TableBody>
            </Table>
          </Paper>
        </div>

      );


    
  }
}

DepensesOffline.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(DepensesOffline);

