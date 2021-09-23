import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "./ResponsiveTable.scss";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const arrayHeaders = ["Moneda", "Símbolo", "Precio", "Volumen", "Cambio de precio", "Mkt cap"];

const ResponsiveTable = ({ arrayCoins }) => {
  return (
    <Table className="d-table d-md-none">
      <Thead>
        <Tr>
          {arrayHeaders.map((header) => (
            <Th key={header}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {arrayCoins.map((coin) => (
          <Tr className="coin-cells" key={coin.id}>
            <Td>
              <img className="coin-image" src={coin.image} alt="" />
              {coin.name}
            </Td>
            <Td className="symbol">{coin.symbol}</Td>
            <Td>€ {coin.current_price}</Td>
            <Td>€{coin.total_volume.toLocaleString()}</Td>
            <Td>
              {coin.price_change_percentage_24h < 0 ? (
                <p className=" red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
              ) : (
                <p className=" green">{coin.price_change_percentage_24h.toFixed(2)}%</p>
              )}
            </Td>
            <Td>€{coin.market_cap.toLocaleString()}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ResponsiveTable;
