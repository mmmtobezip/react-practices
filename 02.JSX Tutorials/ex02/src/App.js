import React from 'react';

function App() {

/*
오류: 
    return (
            <h1>Ex02</h1>
            <p>특징2: Sigle Root</p>
    );

이유:
개행을 js로 바꿀 때, ')'를 '}'로 바꿔줘야함. -> transpile 에러 
*h1의 경우 속성 없으니 null을 써준 것. 
    return (
        <h1>Ex02</h1> -> 아래 처럼 바뀌고 
        React.createElement('h1', null, 'Ex02'); 

        <p>특징2: Sigle Root</p> -> 아래 처럼 바뀜 
        React.createElement('p', null, '특징2: Single Root');

    )
*/
    return (
        // 전부 돔으로 들어가서 createElement로 바뀐다. js이기도 하지만 js가 아닌 친구 'JSX' 
        // <div>로 감싸주던, <>빈 태그로 감싸줘도 가능  -> 단일 루트의 경우 
        <>
        {/* <div>  */}
            <h1>Ex02</h1>
            <p>특징2: Sigle Root</p>
        {/* </div> */}
        </>
    );

/*

해결: 
    return (
        <div>
            <h1>Ex02</h1>   
            <p>특징2: Single Root</p>
        </div>
    );

    transpile

    return (
        React.createElement(
            'div', 
            null, 
            React.createElement('h1', null, 'Ex02'),
            React.createElement('p', null, '특징2: Single Root')
        )
    );

*/
}

export {App};