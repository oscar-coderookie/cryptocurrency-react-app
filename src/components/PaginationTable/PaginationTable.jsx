import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import React, { useState, useEffect } from "react";
import "./PaginationTable.scss";
import axios from "axios";
import { TablePagination, TableBody } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import apiMarket from "../../api/coins";
import { NavLink } from "react-router-dom";

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
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const handleRequestSort = (event, property) => {
    const isAscending = valuetoOrderBy === property && orderDirection === "asc";
    setValuetoOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchApi = async () => {
      await axios
        .get(apiMarket, { signal: signal })
        .then((res) => {
          setCoins(res.data);
        })
        .catch((error) => console.log(error));
    };

    fetchApi();
    return function cleanup() {
      abortController.abort();
    };
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
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <TableContainer sx={{ width: "100%" }} className="p-0  my-5 d-none d-md-table" component={Paper}>
        <div className="d-flex justify-content-around flex-wrap">
          <h2 className="table__title">Mercado: listado de mercados</h2>
          <SearchBar handleSearch={handleSearch} />
          <TablePagination
            rowsPerPageOptions={[10, 20, 50]}
            component="div"
            count={coins.length}
            className="m-0 p-0"
            sx={{ margin: 0 }}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Filas por p??gina"
          />
        </div>

        <Table className="table-crypto" size="small" aria-label="a dense table">
          <TableHead className="table__head">
            <StyledTableRow>
              <TableCell align="center">
                <TableSortLabel
                  sx={{ color: "#fff" }}
                  className="table__label"
                  active={valuetoOrderBy === "name"}
                  direction={valuetoOrderBy === "name" ? orderDirection : "asc"}
                  onClick={createSortHandler("name")}
                >
                  Moneda:
                </TableSortLabel>
              </TableCell>
              <TableCell sx={{}} align="center">
                <TableSortLabel
                  active={valuetoOrderBy === "symbol"}
                  direction={valuetoOrderBy === "symbol" ? orderDirection : "asc"}
                  onClick={createSortHandler("symbol")}
                >
                  S??mbolo:
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
              <TableCell className="d-none d-md-table-cell" align="center">
                <TableSortLabel
                  active={valuetoOrderBy === "volume"}
                  direction={valuetoOrderBy === "volume" ? orderDirection : "asc"}
                  onClick={createSortHandler("volume")}
                >
                  Volumen
                </TableSortLabel>
              </TableCell>
              <TableCell className="d-none d-md-table-cell" align="center">
                Cambio de precio:
              </TableCell>
              <TableCell className="d-none d-md-table-cell" align="center">
                Mkt Cap:
              </TableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {sortedRowInformation(filteredCoins, getComparator(orderDirection, valuetoOrderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((coin, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell sx={{ display: "flex", borderBottom: "none" }} className="">
                    <NavLink className="d-flex text-decoration-none table-links" to={`/market/coins/${coin.id}`}>
                      <img className="table-icons" src={coin.image} alt="logo" />
                      <p className="table-text ">{coin.name}</p>
                    </NavLink>
                  </StyledTableCell>
                  <StyledTableCell sx={{ borderBottom: "none" }} className="coin-symbol" align="center">
                    {coin.symbol}
                  </StyledTableCell>
                  <StyledTableCell sx={{ borderBottom: "none" }} align="center">
                    ???{coin.current_price}
                  </StyledTableCell>
                  <StyledTableCell sx={{ borderBottom: "none" }} className="d-none d-md-table-cell" align="center">
                    ???{coin.total_volume.toLocaleString()}
                  </StyledTableCell>
                  <StyledTableCell sx={{ borderBottom: "none" }} className="d-none d-md-table-cell" align="center">
                    {coin.price_change_percentage_24h < 0 ? (
                      <p className=" red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    ) : (
                      <p className=" green">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    )}
                  </StyledTableCell>
                  <StyledTableCell sx={{ borderBottom: "none" }} className="d-none d-md-table-cell" align="center">
                    ???{coin.market_cap.toLocaleString()}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PaginationTable;
