import React from 'react';
import Header from './Header';
// import './assets/scss/App.scss'; Styled Component적용을 위한 주석처리 

import styled from 'styled-components';
// {} -> ``  대체 
//div는 함수를 의미 
//개행 단위로 파라미터(text-align)가 넘어가고 
const StyledDiv = styled.div` 
    text-align: center;  
`


function App() {
    return (
        //div를 태그 단위로 스타일링이 적용된 component를 만들 수 있다. 
        //아래 div 태그는 App.scss의 #App 속성이 적용된 컴포넌트이다. 
        <StyledDiv>
            <Header />
        </StyledDiv>
    );
}

export default App;