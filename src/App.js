import React from 'react';
import styled from 'styled-components';
import cityTimezones from 'city-timezones';
import getTimezoneOffset from 'get-timezone-offset';
import SearchBar from './components/SearchBar';
import Time from './components/Time';
import './App.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const calculateTimezoneOffset = (offset) => {
    return -parseInt(offset)/60;
}

const prepSearchResult = (data, searchText) => {
    const exactCitiesMatch = data.filter(datum => searchText.toLowerCase() === datum.city.toLowerCase());
    return exactCitiesMatch.map(city => {
        const offset = calculateTimezoneOffset(getTimezoneOffset(city.timezone));
        city.offset = offset;
        return city;
    });
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            searchResult: [],
            utc_time: new Date(),
            search_time: new Date()
        }
    }

    componentDidMount(){
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    tick = () => {
        const { searchResult } = this.state;
        
        this.setState({ utc_time: new Date() });

        if(searchResult.length > 0){
            const time = new Date();
            time.setHours(time.getHours() + searchResult[0].offset);
            this.setState({
                search_time: time
            });
        }
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    handleTextChange = event => {
        this.setState({
            searchText: event.target.value
        })
    }

    handleSearchSubmit = event => {
        const { searchText } = this.state;
        event.preventDefault();
        const citiesData = cityTimezones.findFromCityStateProvince(searchText);
        if (citiesData.length > 0){
            const searchResult = prepSearchResult(citiesData, searchText);
            this.setState({
                searchResult
            })
        }
    }

    render(){
        const { utc_time, search_time, searchText, searchResult } = this.state;
        const { handleTextChange, handleSearchSubmit } = this;
        return (
            <Container>
                <SearchBar searchText={searchText} handleTextChange={handleTextChange} handleSearchSubmit={handleSearchSubmit} />
                <Time utc_time={utc_time} search_time={search_time} searchData={searchResult} />
            </Container>
        );
    }
}

export default App;