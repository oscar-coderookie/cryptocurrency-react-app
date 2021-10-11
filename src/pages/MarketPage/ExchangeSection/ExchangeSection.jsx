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
  const [breakpoint, setBreakpoint] = useState(true);

  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 768) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
    { field: "name", headerName: "Compañía", width: 250 },
    { field: "country", headerName: "País", width: 250 },

    { field: "trust_score_rank", headerName: "TrustRank", width: 180, type: "number" },
    {
      field: "year_established",
      headerName: "Año",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 200,
      type: "number",
    },
    { field: "url", headerName: "Sitio Web", width: 300 },
  ];

  return (
    <Stack className="exchange-section">
      <div className="container-xl">
        <div className="row">
          <h1 className="my-4 text-center">Exchanges: compañias de criptomercado</h1>
          {!breakpoint ? (
            <div>
              <PaginationComponent
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
                setPostsPerPage={setPostsPerPage}
              />
              {currentPosts.map((coin) => {
                return (
                  <div className="col-11 col-md-6 col-lg-3 mx-auto my-2" key={coin.id}>
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
          ) : null}
          {breakpoint ? (
            <DataGrid
            sx={{innerWidth: 1200}}
              rows={data}
              paginationMode="client"
              rowCount={data.length}
              columns={headers}
              pageSize={10}
              headerHeight={60}
              header
              autoHeight={true}
              rowsPerPageOptions={[10, 20, 30]}
            />
          ) : null}
        </div>
      
      </div>
    </Stack>
  );
};

export default ExchangeSection;
