/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import history from '../../history';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#ecebeb",
    color: "#666",
  },
  body: {
    fontSize: 14,
    borderBottom: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "#fff",
    },
  },
}))(TableRow);

function createData(name, over, maiden, runs, wickets, economy) {
  return { name, over, maiden, runs, wickets, economy };
}

const rows = [
  createData('James Anderson', 9, 1, 54, 1, 6.00),
  createData('Sam Curran', 2.2, 0, 10, 1, 5.00),
];

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
//     minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bowler</StyledTableCell>
            <StyledTableCell align="right">O</StyledTableCell>
            <StyledTableCell align="right">M</StyledTableCell>
            <StyledTableCell align="right">R</StyledTableCell>
            <StyledTableCell align="right">W</StyledTableCell>
            <StyledTableCell align="right">ECO</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const result = (row.runs / row.over);
            return (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <a onClick={() => { history.push('/Anderson') }}>{row.name}</a>
                </StyledTableCell>
                <StyledTableCell align="right">{row.over}</StyledTableCell>
                <StyledTableCell align="right">{row.maiden}</StyledTableCell>
                <StyledTableCell align="right">{row.runs}</StyledTableCell>
                <StyledTableCell align="right">{row.wickets}</StyledTableCell>
                <StyledTableCell align="right">{result.toFixed(2)}</StyledTableCell>
              </StyledTableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
