import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className='search-wrapper'>
                    <input type="search" id="search" className="search" placeholder="Søg i menuen" />
                </div>
        );
    }
}


export default Search;