import React, { Component } from 'react';
import Navigation from './../Navigation/Navigation';
import SearchResults from './../SearchResults/SearchResults';
import CVEList from './../CVEList/CVEList';
import Toolbar from './../CVEList/Toolbar/Toolbar';
import BottomScrollListener from 'react-bottom-scroll-listener';
import './Layout.css';
import Auxilary from './../../HOC/Auxilary';


class Layout extends Component {
    state = {
        query: "",
        searchResults: [],
        list: [],
        max: 0
    }

    submitQuery = (newQuery) => {
        if(this.state.query !== newQuery){//different query than current cached
            this.setState({
                query: newQuery,
                searchResults: []
            });
            fetch('/api/search/'+newQuery)
                .then(res => res.json())
                .then(searchResults => this.setState({searchResults}))
                .catch(exception => {
                    console.log(exception);
                    this.setState({query:""});
                });
        }
        window.scrollTo(0, 0);
    }

    getMoreListEntries = () => {
        const from = this.state.list.length;
        const to = this.state.list.length+150;
        fetch('/api/get/'+from+'/'+to)
            .then(res => res.json())
            .then(newList => this.setState(prevState=>{
                return {list: prevState.list.concat(newList)}
            }));
    }

    getNumberOfEntires = () => {
        fetch('/api/info/max')
            .then(res=> res.json())
            .then(number => {this.setState({max: number})})
    }

    componentDidMount = () => {
        this.getMoreListEntries();
        this.getNumberOfEntires();
    }

    render() {
        let RenderSearchResults = null;
        if(this.state.query!==""){
            RenderSearchResults = <SearchResults list={this.state.searchResults} query={this.state.query}/>
        }
        return (
            <Auxilary>
                <div className="MainLayout">
                    <Navigation submitQuery={this.submitQuery} query={this.state.query}/>
                    {RenderSearchResults}
                    <Toolbar count={this.state.list.length} max={this.state.max}/>
                    <CVEList list={this.state.list} clicked={this.submitQuery}/>
                </div>
                <BottomScrollListener onBottom={this.getMoreListEntries} offset={500}/>
            </Auxilary>
        );
    }
}

export default Layout;