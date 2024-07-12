import React from 'react';
import GreoceryList from './GreoceryList';
import '../assets/css/App.css'; //css의 경우 확장자를 붙이지 않으면 js로 인식함. -> 현재는 모듈 적용 안된 단순한 css 

function App(props) {
    return (
        <div id={'App'}>
            {/* _index.html내 <h1 class="title">Grocery List</h1> 변경 */}
            <h1 className={'title'}>{'Grocery List'}</h1>
            <GreoceryList />     
        </div>  
    );
}

export default App;