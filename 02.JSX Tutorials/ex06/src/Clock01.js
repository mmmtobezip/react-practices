import React from 'react';

function Clock01(props) {
    // 가능한 아래 같은 js 코드는 안넣는 게 좋다. -> 대체 코드1 참고 
    const now = new Date(); 
    let hour = now.getHours(); //const는 사용 불가 -> let으로 바꿔줌 
    let mins = now.getMinutes();
    let seconds = now.getSeconds();

    if(hour < 10) {
        hour = '0' + hour;
    }
    if(mins < 10) {
        mins = '0' + mins;
    }
    if(sec<10) {
        sec = '0' + sec;
    }
    
    return (
        <div>
            {/* 위에 선언한 변수 화면에 랜더링 해주기 -> with jsx 표현식  */}
            {/* 대체코드1 -> {now.getHours()} : {now.getMinutes()} : {now.getSeconds()} */}
            {hour} : {mins} : {seconds}
        </div>
    );
}

export default Clock01;