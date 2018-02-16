import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
    state = {
        query: ""
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.props.submitQuery(this.state.query);
        }
    }

    handleInputChanged = (event) => {
        const newQuery = event.target.value;
        this.setState({query:newQuery});
    }

    componentDidMount = () => {
        this.setState({query: this.props.query});
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.query != this.props.query){
            this.setState({query: nextProps.query});
        }
    }
    
    render() {
        return (
            <div className="MainSearch">
                <div>&#9906;</div>
                <input type="text" onChange={this.handleInputChanged} onKeyPress={this.handleKeyPress} value={this.state.query}></input>
            </div>
        );
    }
}

Search.propTypes = {
    submitQuery: PropTypes.func
};

export default Search;