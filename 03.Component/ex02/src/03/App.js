import React from 'react';
import './assets/css/App.css'; //x 
import {Header} from './assets/css/App.css'; //module로 쓰는 방식, 리액트의 컴포넌트 단위 개발이 되기 때문에 이렇게 사용해야 css가 먹힌다?
//Header는 css에 존재하는 이름이 아닌 변수를 의미 = 어떤 해싱된 값을 가지고 있음.  -> 모듈로 쓰는 방식 
//clssName을 셋팅할 땐 css에 지정된 className을 잘 찾아서 명시하자 
function App() {
    return (
        <div id={'App'}>
            {/* 안되는 버전 
            
            {'Header'} Header라는 
            //ehlsms qjwjs 
            {Header} : Header라는 스트링을 셋팅하는것 
            */}
            <h1 className={'Header'}>CSS Module I</h1> 
            {/* Header라는 값을 import에 명시된 Header로부터 받고 이를 css loader가 받는 것.  */}
            <h1 className={Header}>CSS Module I</h1>
        </div>
    );
}

export default App;