import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
`;

const ColumnWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    &:first-child{
        border-right: thin solid #888888;
    }
`;

const TimeDisplay = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Digits = styled.h1`
    font-size: 60px;
    padding-bottom: 20px;
`;

const Day = styled.p`
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: thin solid black;
`;

const City = styled.p`
    font-size: 14px;
`;

const UTCOffset = styled.p`
    flex: 1;
    font-size: 14px;
    text-align: center;
`;

class Time extends React.Component {
    render(){
        return(
            <Wrapper>
                <ColumnWrapper>
                    <TimeDisplay>
                        <Digits>
                            {new Date().toLocaleTimeString()}
                        </Digits>
                        <Day>
                            Saturday
                        </Day>
                        <City>
                            London
                        </City>
                    </TimeDisplay>
                    <UTCOffset>
                        +00:00
                    </UTCOffset>
                </ColumnWrapper>
                <ColumnWrapper>
                    <TimeDisplay>
                        <Digits>
                            {new Date().toLocaleTimeString()}
                        </Digits>
                        <Day>
                            Saturday
                        </Day>
                        <City>
                            London
                        </City>
                    </TimeDisplay>
                    <UTCOffset>
                        +00:00
                    </UTCOffset>
                </ColumnWrapper>
            </Wrapper>
        );
    }
}

export default Time;