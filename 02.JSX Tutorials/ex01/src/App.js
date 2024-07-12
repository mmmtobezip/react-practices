import React from 'react';

function App() {
    return (
        <div>
            <h1>Ex01</h1>
            <p>특징1: HTML과의 차이점</p>
                
            {/* 1. 속성은 Camel Case로 작성 */}
            <input type='text' maxLength='10' />

            {/* 2. Element는 닫아주기  
                (HTML5에서는 괜찮지만 JSX는 닫아줘야함)
            */}
            <br/>
            <hr/>
            <img src=''/>

            {/*
                3. JSX Element의 속성(id, src, className 등) 이름은 DOM API와 일치한다.
                e.g. html의 경우, class(Tag) / JSX의 경우 className(DOM API)

                <h4 id='title' class='header'>타이틀</h4>
                document.getElementById('title').className = 'header';
            */}
            <h4 id='title' className='header'>타이틀</h4>
        </div>
    );
}

export {App};