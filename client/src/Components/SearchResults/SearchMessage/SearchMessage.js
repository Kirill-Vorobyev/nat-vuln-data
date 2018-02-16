import React from 'react';
import PropTypes from 'prop-types';
import './SearchMessage.css';

const SearchMessage = props => {
    const plural = props.number === 1 ? "Result" : "Results";
    const message = props.err ? <h2 className="SearchMessage">{props.msg}</h2> 
                                : <h2 className="SearchMessage">{props.number} {plural} containing: "{props.msg}"</h2>
    return message;
};

SearchMessage.propTypes = {
    msg: PropTypes.string,
    count: PropTypes.number
};

export default SearchMessage;