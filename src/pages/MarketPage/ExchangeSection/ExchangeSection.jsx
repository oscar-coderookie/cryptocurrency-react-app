import "./ExchangeSection.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { SkeletonMaterial, PaginationComponent } from "../../../components";
import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

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

  const headers = [
    { field: "name", headerName: "Nombre moneda", width: 200 },
    { field: "country", headerName: "País de origen", width: 150 },
    { field: "url", headerName: "Sitio Web", width: 200},
    {field: "trust_score_rank", headerName: "Ranking de confianza", width: 120, type: "number"} ,
    {
      field: "year_established",
      headerName: "Año de fundación",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 120,
      type: "number"
    },
  ];

  return (
    <Stack className="exchange-section">
      <div className="container-xl">
        <div className="row">
          <h1 className="text-center">Exchanges: compañias de criptomercado</h1>
          <PaginationComponent
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            setPostsPerPage={setPostsPerPage}
          />
          {currentPosts.map((coin) => {
            return (
              <div className="col-11 col-md-4 col-lg-3 mx-auto my-2" key={coin.id}>
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
        </div>
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid rows={currentPosts} columns={headers} pageSize={10} rowsPerPageOptions={[5, 20, 30]} checkboxSelection />
        </div>
      </div>
    </Stack>
  );
};

export default ExchangeSection;
