import React from 'react';
// import {Header} from './assets/scss/Header.scss';
import styled from 'styled-components';

const StyledH1 = styled.h1` 
    width: 280px;
    font-size: 14px;
    text-align: center;
    margin: 100px auto;
    padding: 20px;
    border: 20px;
    color: #1144fe;
    background-color: #cdc1ce
`
export default function(props) {
    return (
        // 소문자로 시작할경우 html element(tag)로 인식하고, 대문자로 시작하면 컴포넌트로 인식하고 함수를 호출해줌. 
        <StyledH1> 
            CSS in JS: Styled Component
        </StyledH1>
    );
}