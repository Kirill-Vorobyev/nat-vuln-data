import React from 'react';
import Title from './../../Navigation/Title/Title';
import thousands from 'thousands';
import './Toolbar.css';


const Toolbar = props => {
    const counter = thousands(props.count)+'/'+thousands(props.max);
    return (
        <div className="Toolbar">
            <div className="ToolbarTitle">CVE List</div>
            <div className="ToolbarTitle">{counter}</div>
        </div>
    );
};

export default Toolbar;