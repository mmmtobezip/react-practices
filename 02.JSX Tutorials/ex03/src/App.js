import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    return ( // 리턴 안에는 js 구문(e.g. if문/for문) 못 들어가고, 표현식(함수호출, 리터럴, 연산식, 변수이름)을 적어야함
        <div>
            <Header /> {/*  컴포넌트를 태그로 불러올 수 있다 */}
            <Contents /> {/*  <p>함수 컴포넌트</p> -> 함수 컴포넌트로 바꾼 것(대체되는 파일이 Contents.js) */}
        </div>
    );
}

{/* <Header /> 호출되면 -> createElement('div', null, Header()); */}
export {App};


/*
jsx는 transpiling을 통해 하나의 js로 코드를 변환해 App을 가동시키기 위한 element로 변환된다 -> 트리가 만들어진다. 

Real DOM내 body밑에 <div id="root">를 통해 ReactDOM.render()를 통해 App을 호출시킨다. 
이때 HTML elements로 변환되고, 가상의 DOM과 Real DOM이 sync를 맞추게 된다 = mount (딱 처음 real - fake dom(=React DOM/V(virtual)-DOM이 sync를 맞추는 작업)
dom api event를 통해 사용자의 호출에 따라 가상의 dom내 매핑된 이벤트들이 호출되고 이 또한 sync를 맞추기 위한 re-rendering 작업을 수행한다. 
React DOM의 변화를 Real DOM은 observe & update한다.

React가 DOM API 지원을 못할 경우, 
jsx가 직접 REAL DOM API를 호출하도록 transpiling(jsx -> js) 할 수 있다(?)
*/