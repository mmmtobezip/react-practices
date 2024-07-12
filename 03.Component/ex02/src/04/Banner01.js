import React from 'react';
import {Header} from './assets/css/Banner01.css';
//변수로 해싱된 변수값을 가져오고 String이 아닌 변수값을 그대로 사용한다. 

function Banner01(props) {
    return (
        <div>
           <h1 className={Header}>Hello React</h1> 
        </div>
    );
}

export default Banner01;