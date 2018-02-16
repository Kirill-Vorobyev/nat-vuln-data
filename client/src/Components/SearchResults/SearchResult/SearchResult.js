import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import './SearchResult.css';

const SearchResult = props => {
    const cveObj = props.cve;
    const cveDate = new Date(cveObj.publishedDate);
    const id = cveObj.cve.CVE_data_meta.ID;
    const description = cveObj.cve.description.description_data[0].value;
    let baseScoreV3 = "???";
    let baseSeverityV3 = "???";
    let baseScoreV2 = "???";
    let baseSeverityV2 = "???";
    if(Object.keys(cveObj.impact).length !== 0){
        baseScoreV3 = cveObj.impact.baseMetricV3.cvssV3.baseScore;
        baseSeverityV3 = cveObj.impact.baseMetricV3.cvssV3.baseSeverity;
        baseScoreV2 = cveObj.impact.baseMetricV2.cvssV2.baseScore;
        baseSeverityV2 = cveObj.impact.baseMetricV2.severity;
    }

    const severity = "V2: "+baseScoreV2 +" "+ baseSeverityV2 + " | V3: "+baseScoreV3 +" "+ baseSeverityV3

    return (
        <div className="SearchResult">
            <div className="SearchResultId">
                <div>{id}</div>
                <div>{severity}</div>
            </div>
            <div className="SearchResultDesc">{description}</div>
            <div className="SearchResultDate">Published: <div>{dateFormat(cveDate,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</div></div>
        </div>
    );
};

SearchResult.propTypes = {
    cve: PropTypes.object
};

export default SearchResult;