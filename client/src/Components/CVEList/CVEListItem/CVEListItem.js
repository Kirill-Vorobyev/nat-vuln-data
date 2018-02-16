import React from 'react';
import PropTypes from 'prop-types';
import './CVEListItem.css';

const CVEListItem = props => {
    const cveObj = props.cve
    const style = props.count%2==0 ? {backgroundColor: '#e7eff6'} : {backgroundColor: '#adcbe3'};

    const id = cveObj.cve.CVE_data_meta.ID;
    const summary = cveObj.cve.description.description_data[0].value.slice(0,100)+"...";
    let baseScore = "???";
    let baseSeverity = "???";
    if(Object.keys(cveObj.impact).length !== 0){
        baseScore = cveObj.impact.baseMetricV3.cvssV3.baseScore;
        baseSeverity = cveObj.impact.baseMetricV3.cvssV3.baseSeverity;
    }

    return (
        <div className="CVEListItem" style={style} onClick={() => props.clicked(id)}>
            <div className="CVEListItemId">{id}</div>
            <div className="CVEListItemDesc">{summary}</div>
            <div className="CVEListItemSeverity">{baseScore +" "+ baseSeverity}</div>
        </div>
    );
};

CVEListItem.propTypes = {
    cve: PropTypes.object,
    count: PropTypes.number
};

export default CVEListItem;