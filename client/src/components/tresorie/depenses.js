import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow, TableFooter, TablePagination } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Archive from 'material-ui-icons/Archive';
import Loading from '../loading';
import moment from 'moment'
import Pie from './pie'
import DepOffline from './depOffline'




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



class Depenses extends React.Component {



  render() {
    const { classes } = this.props;
    var abc = [];
    var abc2 = [];



    if (window.navigator.onLine == false) {
      return (

        <DepOffline />

      )
    }
    else {

      if (this.props.data.loading) {
        return (<Loading />)
      }

      else {

        return (
          <div>
            <Pie />
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
                  {this.props.data.DepensesLists.map(n => {
                    abc.push(n)
                    if (n.type_dep._id == "000000000000000000000002") {
                      return (
                        localStorage.type2 = n.type_dep._id,

                        <TableRow className={classes.row} key={n.id}>
                          <CustomTableCell>{n.description}</CustomTableCell>
                          <CustomTableCell numeric>{n.montant} DT</CustomTableCell>
                          <CustomTableCell numeric>{moment(n.date).format('MMMM Do YYYY, h:mm a')}</CustomTableCell>
                          <CustomTableCell numeric><Archive /></CustomTableCell>
                        </TableRow>

                      );
                    }

                  })}
                  {localStorage.setItem('abc', JSON.stringify(abc))}
                </TableBody>
              </Table>
            </Paper>
            <br />
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Charge Fixe</CustomTableCell>
                    <CustomTableCell numeric>Montant</CustomTableCell>
                    <CustomTableCell numeric>Date</CustomTableCell>
                    <CustomTableCell numeric>Facture</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.data.DepensesLists.map(n => {
                    abc2.push(n)
                    if (n.type_dep._id == "000000000000000000000001") {
                      return (
                        localStorage.type1 = n.type_dep._id,

                        <TableRow className={classes.row} key={n.id}>
                          <CustomTableCell>{n.description}</CustomTableCell>
                          <CustomTableCell numeric>{n.montant} DT</CustomTableCell>
                          <CustomTableCell numeric>{moment(n.date).format('MMMM Do YYYY, h:mm a')}</CustomTableCell>
                          <CustomTableCell numeric><Archive /></CustomTableCell>
                        </TableRow>

                      );
                    }

                  })}
                  {localStorage.setItem('abc2', JSON.stringify(abc2))}
                </TableBody>
              </Table>
            </Paper>
          </div>

        );


      }
    }
  }
}

Depenses.propTypes = {
  classes: PropTypes.object.isRequired,
};


export const DepensesQuery = gql`
  query DepensesQuery {
    DepensesLists {
      _id
      description
      montant
      date
      type_dep{
        _id
        depType
      }          
    }
  }
`;

export default graphql(DepensesQuery)(withStyles(styles)(Depenses));

