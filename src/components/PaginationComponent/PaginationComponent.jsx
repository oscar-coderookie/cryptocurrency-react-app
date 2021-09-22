
import React from 'react'
import './PaginationComponent.scss';

const PaginationComponent = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map((number)=> (
                    <li key={number} className="pagination-item">
                        <p className="pagination-icon" onClick={() => paginate(number)}>
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PaginationComponent
