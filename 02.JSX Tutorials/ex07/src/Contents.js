import React from 'react';

function Contents(props) {
    /*
        comment01: JSX 밖은 JavaScript 구문(주석문) 가능 -> return() 구문 전에는 java script 공간 
    */
    return (
        <div 
            /*
                comment02: JSX element tag안에 구문(주석문) 가능 -> 비추천 
            */
            className='Clock' 
            title='시계'>
            {/* 
                (👍🏻추천)comment03: '{}'안에 여러 주석을 통해 표현식이 실행되는 블록 안에서 구문(주석문) 달기 
            */ }
            <p>ex07: Comment</p>
            {/* 
                JSX는 HTML이 아니므로, <!-- --> HTML 주석 사용 불가능 
            */} 
            {/*  
            (❌주의❌) comment04: JSX 안에 JavaScript 구문(주석문) 불가능  모두 그대로 출력 
            */}
            <div>00:00:00AM</div>
        </div>
    );
}

export default Contents;