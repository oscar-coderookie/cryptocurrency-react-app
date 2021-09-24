import './PaginationComponent.scss';

const PaginationComponent = ({postsPerPage, totalPosts, paginate, setPostsPerPage}) => {
    const pageNumbers = [];

    const handleChangePage = (e) => {
        setPostsPerPage(e.target.value);
    }

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-block">
            <ul className="pagination-list">
                {pageNumbers.map((number)=> (
                    <li key={number} className="pagination-item" onClick={() => paginate(number)}>
                        <button className="pagination-icon" >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="pagination-options">
            <p>Resultados por página:  </p>
              <select onChange={ handleChangePage}>
                <option value="10">10</option>
                <option value="20" selected="selected">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
            </select>  
            </div>
            
        </div>
    )
}

export default PaginationComponent
