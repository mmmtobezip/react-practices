import React, {useState} from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done}) {
    const [isChecked, setIsChecked] = useState(done); 

    return (
        <li className={_Task}>
            <input 
                type='checkbox' 
                checked={isChecked} 
                onChange={() => { setIsChecked(!isChecked);}} 
            />
            {name}
            {/* #으로 처리하는게 prevendefault 처리하는 것과 같음. # 뒤에 id값을 주면 이동하는데, #만 적었으니 새로고침x */}
            <a href='#' className={Task_Remove}></a>
        </li>
    );
}

export default Task;