import React from 'react';
import './Title.css';
import Auxilary from './../../../HOC/Auxilary';
import { PropTypes } from 'prop-types';

const Title = props => {
    return (
        <Auxilary>
            <div className="MainTitle">
                {props.title}
            </div>
            <div className="MobileTitle">
                {props.mobileTitle}
            </div>
        </Auxilary>
    );
};

Title.propTypes = {
    title: PropTypes.string,
    mobileTitle: PropTypes.string
};

export default Title;