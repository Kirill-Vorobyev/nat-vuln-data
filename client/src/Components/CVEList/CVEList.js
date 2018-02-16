import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResult from './../SearchResults/SearchResult/SearchResult';
import Loader from '../../HOC/Loader';
import CVEListItem from './CVEListItem/CVEListItem';
import BottomScrollListener from 'react-bottom-scroll-listener';
import './CVEList.css';

class CVEList extends Component {
    
    render() {
        const cveList = this.props.list.map((curr,i)=>{
            return <CVEListItem 
                    key={curr.cve.CVE_data_meta.ID} 
                    cve={curr} 
                    count={i}
                    clicked={this.props.clicked}/>
        })

        return (
            <div id="CVEList" className="CVEList">
                {cveList}
            </div>
        );
    }
}

CVEList.propTypes = {
    list: PropTypes.array
};

export default Loader(CVEList);