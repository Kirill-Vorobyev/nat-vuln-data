import React from 'react';
import PropTypes from 'prop-types';
import SearchMessage from './SearchMessage/SearchMessage';
import SearchResult from './SearchResult/SearchResult';
import Loader from '../../HOC/Loader';
import './SearchResults.css';
import Auxilary from './../../HOC/Auxilary';

const SearchResults = props => {
    let message = null;
    let displayList = [];

    if(props.list.length){//list has items
        const listHead = props.list[0];
        if(typeof listHead === 'string'){//first item is a string containing error message
            message = <SearchMessage msg={listHead} err={true}/>;//Set the message to the error
        }else{
            displayList = props.list.map((curr,i) => (//Map the data to the components
                <SearchResult key={curr.cve.CVE_data_meta.ID} cve={curr}/>
            ));
            message = <SearchMessage msg={props.query} number={displayList.length}/>//Set the message to display the query
        }
    }
    return (
        <Auxilary>
            {message}
            <div className="SearchResults">
                {displayList}
            </div>
        </Auxilary>
    );
};

SearchResults.propTypes = {
    list: PropTypes.array,
    query: PropTypes.string
};

export default Loader(SearchResults);