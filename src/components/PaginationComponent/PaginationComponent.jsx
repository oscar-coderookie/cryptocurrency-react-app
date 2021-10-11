import './PaginationComponent.scss';

const PaginationComponent = ({postsPerPage, totalPosts, paginate, setPostsPerPage}) => {
    const pageNumbers = [];

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
            
            
        </div>
    )
}

export default PaginationComponent
