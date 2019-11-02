import React from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import Time from './components/Time';
import './App.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
    }

    handleTextChange = event => {
        this.setState({
            searchText: event.target.value
        })
    }

    handleSearchSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        const { searchText } = this.state;
        const { handleTextChange, handleSearchSubmit } = this;
        return (
            <Container>
                <SearchBar searchText={searchText} handleTextChange={handleTextChange} handleSearchSubmit={handleSearchSubmit} />
                <Time />
            </Container>
        );
    }
}

export default App;