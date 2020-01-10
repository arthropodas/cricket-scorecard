import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, Runs, Balls, four, six, RunRate) {
  return { name, Runs, Balls, four, six, RunRate };
}

const rows = [
  createData('Faf du Plesis', 63, 73, 2, 0, 32.64),
  createData('Imran Tahir', 2, 9, 0, 0, 22.22),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Batsman</StyledTableCell>
            <StyledTableCell align="right">R</StyledTableCell>
            <StyledTableCell align="right">B</StyledTableCell>
            <StyledTableCell align="right">4s</StyledTableCell>
            <StyledTableCell align="right">6s</StyledTableCell>
            <StyledTableCell align="right">SR</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <a>{row.name}</a>
              </StyledTableCell>
              <StyledTableCell align="right">{row.Runs}</StyledTableCell>
              <StyledTableCell align="right">{row.Balls}</StyledTableCell>
              <StyledTableCell align="right">{row.four}</StyledTableCell>
              <StyledTableCell align="right">{row.six}</StyledTableCell>
              <StyledTableCell align="right">{row.Runs / row.Balls * 100}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
