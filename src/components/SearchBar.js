import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 30px;
    box-shadow: 0 5px 5px #cdcdcd;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
`;

const SearchForm = styled.form``;

const Settings = styled.div`
    font-size: 16px;
`;

const Input = styled.input`
    display: inline-block;
    padding: 11px;
    min-width: 150px;
    border-radius: 3px;
    margin-right: 10px;
    border: thin solid #888888;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #3498db;
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
    border-radius: 3px;
    color: #ffffff;
    font-size: 14px;
    border: none;
    outline: none;
    :hover{
        background-color: #3cb0fd;
        background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
        cursor: pointer;
    }
    :active{
        outline: none;
    }
`;


const SearchBar = props => {
    const { searchText, handleTextChange, handleSearchSubmit } = props
    return (
        <Wrapper>
            <Title>World Clock</Title>
            <SearchForm onSubmit={handleSearchSubmit}>
                <Input type="text" name={searchText} onChange={handleTextChange} placeholder="Search City, Country..." />
                <Button type="submit">Search</Button>
            </SearchForm>
            <Settings>Settings</Settings>
        </Wrapper>
    );
}

export default SearchBar;