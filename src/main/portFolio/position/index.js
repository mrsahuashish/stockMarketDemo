import styled from "@emotion/styled";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import Subscribe from "../../../component/socket/Subscribe";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
}));
const StockPrice = styled(Typography)({
  color: "#888",
});
function Position(props) {
  const { watchlistArray, watchlistPrice, setWatchListPrice } = props;
  
  return (
    <>
      <TableContainer className="mt-4">
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Stock Name</StyledTableCell>
              <StyledTableCell>Stock Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {watchlistArray.map((stock, index) => (
              <TableRow key={index}>
                <TableCell>{stock.name}</TableCell>
                <TableCell>
                  <StockPrice>
                    {watchlistPrice[stock.token]?watchlistPrice[stock.token]['price']:'-'}
                  </StockPrice>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Position;
