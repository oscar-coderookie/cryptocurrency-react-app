import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import React, { useState, useEffect } from "react";
import "./PaginationTable.css";
import axios from "axios";
import { TablePagination } from '@mui/material';
import { TableBody } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [coins, setCoins] = useState([]);
  const [valuetoOrderBy, setValuetoOrderBy] = useState("name");
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleRequestSort = (event, property) => {
    const isAscending = valuetoOrderBy === property && orderDirection === "asc";
    setValuetoOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const sortedRowInformation = (rowArray, comparator) => {
    const stabilizedRowArray = rowArray.map((el, index) => [el, index]);
    stabilizedRowArray.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedRowArray.map((el) => el[0]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0);
  };

  return (
    <>
      <TableContainer  className="container-xl p-0 m-0" component={Paper}>
        <Table className="table-crypto" size="small" aria-label="a dense table">
          <TableHead>
            <StyledTableRow>
              <TableCell align="center">
                <TableSortLabel
                  active={valuetoOrderBy === "name"}
                  direction={valuetoOrderBy === "name" ? orderDirection : "asc"}
                  onClick={createSortHandler("name")}
                >
                  Moneda:
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
                <TableSortLabel
                  active={valuetoOrderBy === "symbol"}
                  direction={valuetoOrderBy === "symbol" ? orderDirection : "asc"}
                  onClick={createSortHandler("symbol")}
                >
                  Símbolo:
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
                <TableSortLabel
                  active={valuetoOrderBy === "price"}
                  direction={valuetoOrderBy === "price" ? orderDirection : "asc"}
                  onClick={createSortHandler("price")}
                >
                  Precio
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">
                <TableSortLabel
                  active={valuetoOrderBy === "volume"}
                  direction={valuetoOrderBy === "volume" ? orderDirection : "asc"}
                  onClick={createSortHandler("volume")}
                >
                  Volumen
                </TableSortLabel>
              </TableCell>
              <TableCell align="center">Cambio de precio:</TableCell>
              <TableCell align="center">Mkt Cap:</TableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
          {sortedRowInformation(coins, getComparator(orderDirection, valuetoOrderBy))
          .slice(page * rowsPerPage, page *rowsPerPage + rowsPerPage)
          .map((coin, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center" className="table-names">
                <img className="table-icons" src={coin.image} alt="logo" />
                <p className="table-text">{coin.name}</p>
              </StyledTableCell>
              <StyledTableCell className="coin-symbol" align="center">
                {coin.symbol}
              </StyledTableCell>
              <StyledTableCell align="center">€{coin.current_price}</StyledTableCell>
              <StyledTableCell align="center">€{coin.total_volume.toLocaleString()}</StyledTableCell>
              <StyledTableCell align="center">
                {coin.price_change_percentage_24h < 0 ? (
                  <p className=" red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                ) : (
                  <p className=" green">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">€{coin.market_cap.toLocaleString()}</StyledTableCell>
            </StyledTableRow>
          ))}
          </TableBody>
        </Table>
      <TablePagination
        rowsPerPageOptions={[10,20,50]}
        component="div"
        count={coins.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </TableContainer>
    </>
  );
};

export default PaginationTable;
