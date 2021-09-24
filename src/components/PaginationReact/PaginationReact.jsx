import ReactPaginate from "react-paginate";
import "./PaginationReact.scss";

const PaginationReact = ({ pages, postsPerPage, changePage, setCoinsPerPage }) => {
  const pageCount = Math.ceil(pages.length / postsPerPage);

  const handleChangePage = (e) => {
    setCoinsPerPage(e.target.value);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel="Anterior"
        nextLabel="Siguiente"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-btns"}
        previousLinkClassName={"pagination-previous"}
        nextLinkClassName={"pagination-next"}
        disabledClassName={"pagination-disabled"}
        activeLinkClassName={"pagination-active"}
      />
      <div className="pagination-page-select">
        <p>Resultados por página: </p>
        <select onChange={handleChangePage}>
          <option value="10">10</option>
          <option value="20" selected="selected">
            20
          </option>
          <option value="30">30</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationReact;
