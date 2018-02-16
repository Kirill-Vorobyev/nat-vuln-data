import React, {Component} from 'react';
import './Loader.css';

const Loader = (WrappedComponent) => {
    return class Loader extends Component {
        render(){
            return this.props.list.length === 0 ? 
                 <h2 className="Loader">Loading...</h2> : 
                 <WrappedComponent {...this.props} />
        }
    }
};

export default Loader;