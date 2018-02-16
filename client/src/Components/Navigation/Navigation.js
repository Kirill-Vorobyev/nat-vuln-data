import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title/Title';
import Search from './Search/Search';
import './Navigation.css';

const Navigation = props => {
    return (
        <div className="Nav">
            <Title title="National Vulnerability Database 2017" mobileTitle="NVD 2017"/>
            <Search submitQuery={props.submitQuery} query={props.query}/>
        </div>
    );
};

Navigation.propTypes = {
    submitQuery: PropTypes.func,
    query: PropTypes.string
};

export default Navigation;