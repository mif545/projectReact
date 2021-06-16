import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { TableHead } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.grey,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

  

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
//table summarizing race details
const AmountTable=(props)=>{
  const classes = useStyles();

  return (
    <TableContainer component={Paper}  style={{width:"80%",marginLeft:"10%",direction:"rtl"}}>
      <Table className={classes.table}  aria-label="customized table">
        <StyledTableRow style={{backgroundColor:"#3f51b5",color:"white"}}> 
         
            <StyledTableCell align="right">תאור</StyledTableCell>
            <StyledTableCell align="right">מחיר יחידה</StyledTableCell>
            <StyledTableCell align="right">כמות</StyledTableCell>
            <StyledTableCell align="right">סה"כ</StyledTableCell>
           
          
          </StyledTableRow>
        <TableBody>
          
            <StyledTableRow >
             
              <StyledTableCell align="right">{props.kindMaraton.length}</StyledTableCell>
              <StyledTableCell align="right">{props.kindMaraton.price}</StyledTableCell>
              <StyledTableCell align="right">{props.kindMaraton.numUsers}</StyledTableCell>
              <StyledTableCell align="right">{props.kindMaraton.sum}</StyledTableCell>
            </StyledTableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapDispachToProps=(dispach)=>{
    return{
      kindMaraton:dispach.kindMaraton,


    }
}
export default connect(mapDispachToProps)(AmountTable);