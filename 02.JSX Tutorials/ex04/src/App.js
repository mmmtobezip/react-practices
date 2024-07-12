import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    // return (
    //     <div id={'App'} className={'Header'}>
    //         <Header />
    //         <Contents />
    //     </div>
    // );
    //div(tag)의 props가 없는 경우(=자식이 없을 땐) null -> <div> -> React.createElement('div', null,  Header(), Contents())
    //div(tag)의 props가 있는 경우 -> <div id={'App'}> -> React.createElement('div', {id: 'App'}, Header(), Contents())
    return React.createElement(
        'div', {id: 'App'}, 
        React.createElement(Header, null),  //Header가 함수 타입이면 바로 , 클래스 컴포넌트도 사용 가능 -> new를 통해 클래스 컴포넌트 객체 생성해주기에 Header()와 같이 호출 형태로 명시하지x 
        React.createElement(Contents, null)
    );
}

export {App};