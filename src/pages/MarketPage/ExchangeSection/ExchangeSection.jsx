import "./ExchangeSection.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { SkeletonMaterial, PaginationComponent } from "../../../components";
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
    <Stack className="exchange-section container-xl">
      <div className="row">
      <h1>Exchanges: compañias de criptomercado</h1>
        {currentPosts.map((coin) => {
          return (
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto my-2" key={coin.id}>
              <SkeletonMaterial
                title={coin.name}
                imageURL={coin.image}
                country={coin.country}
                yearFoundation={coin.year_established}
                trustRank={coin.trust_score_rank}
                webURL={coin.url}
              />
            </div>
          );
        })}

        <PaginationComponent postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} setPostsPerPage={setPostsPerPage} />
      </div>
    </Stack>
  );
};

export default ExchangeSection;
