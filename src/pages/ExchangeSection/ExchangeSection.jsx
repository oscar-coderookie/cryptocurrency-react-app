import "./ExchangeSection.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { ResponsiveExchangeCard, PaginationComponent } from "../../components";
import { Stack } from "@mui/material";


const ExchangeSection = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/exchanges")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Stack className="exchange-section">
      <div className="container-xl">
        <h1 className="exchange-section__title my-4 text-center">Exchanges: compañias de criptomercado</h1>
        <div className="row p-0">
        <p className="exchange-section__description">En esta seccion encontramos más de 90 diferentes compañías dedicadas a la comercialización de criptodivisas a nivel mundial, ordenadas descendentemente por puntaje de confianza y credibilidad. </p>
          {currentPosts.map((coin) => {
            return (
              <div className="col-12 col-sm-6 col-lg-3 mx-auto my-2" key={coin.id}>
                <ResponsiveExchangeCard
                  title={coin.name}
                  imageURL={coin.image}
                  country={coin.country}
                  yearFoundation={coin.year_established}
                  trustRank={coin.trust_score_rank}
                  webURL={coin.url}
                  id={coin.id}
                />
              </div>
            );
          })}
          <PaginationComponent
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            setPostsPerPage={setPostsPerPage}
          />
        </div>
      </div>
    </Stack>
  );
};

export default ExchangeSection;
