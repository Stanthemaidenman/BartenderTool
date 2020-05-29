import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({from, to, currentPage, resourcesPerPage, totalResources, paginate }) => {
    
    const back = () => {
        if (currentPage > 1) {
            paginate(--currentPage);
        }
    }
    const next = () => {
        let maxPages = totalResources / resourcesPerPage;

        if (currentPage < maxPages) {
            paginate(++currentPage);
        }
    }
    

    return (
        <nav className="page-nav">
            <ul>
                <li><p>Showing: {++from} - {to} of {totalResources}</p></li>
                <li><button
                    className="nav-button"
                    onClick={ () => back() }>Back</button></li>
                <li><button
                    className="nav-button"
                    onClick={() => next()}>Next</button></li>


                <li className="rel">
                   
                    <ul className="pagesize-dropdown">
                        <li><Link to="/QA-accountpicker/pagesize/10" className="nav-button-size">10</Link></li>
                        <li><Link to="/QA-accountpicker/pagesize/50" className="nav-button-size">50</Link></li>
                        <li><Link to="/QA-accountpicker/pagesize/100" className="nav-button-size">100</Link></li>
                        <li><Link to="/QA-accountpicker/pagesize/200" className="nav-button-size">200</Link></li>
                    </ul>
                    <button className="nav-button-size">Page Size: { resourcesPerPage}</button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination

const li = {
    listStyleType: 'none',
    paddingRight: '15px'
}