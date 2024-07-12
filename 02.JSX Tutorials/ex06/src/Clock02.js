import React from 'react';

function Clock02(props) {
    //변수 모두 const 사용 
    const now = new Date(); 
    const hour = now.getHours(); 
    const mins = now.getMinutes();
    const seconds = now.getSeconds();

    return (
        <div>
            {/* slice(-2): 뒤에서부터 2개 짜르기
            e.g. 013 -> 13 출력 
            */}
           {('0' + hour).slice(-2)} 
           {':'} 
           {('0' + mins).slice(-2)}
           {':'} 
           {('0' + seconds).slice(-2)}
        </div>
    );
}

export default Clock02;