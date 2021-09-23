import './MarketsSection.scss';
import {useEffect, useState} from 'react'
import { PaginationTable, ResponsiveTable } from '../../../components';
import axios from 'axios';



const MarketsSection = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
          )
          .then((res) => {
            setCoins(res.data);
          })
          .catch((error) => console.log(error));
      }, []);


    return (
        <div className="markets-section">
            <h1 className="markets__title">CryptoMarket:</h1>
            <p className="markets__legend">Busca entre más de 200 criptomonedas disponibles y mira su información financiera y bursátil en tiempo real:</p>
            <PaginationTable />
            <ResponsiveTable arrayCoins={coins}/>
            
        </div>
    )
}

export default MarketsSection
