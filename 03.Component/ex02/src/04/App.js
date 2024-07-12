import React from 'react';
import Banner01 from './Banner01';
import Banner02 from './Banner02'; 
import './assets/css/App.css'; //module로 import하지 않아도 된다. -> :global로 css 전체를 import할 수 있다.

function App() {
    return (
        <div id={'App'}>
            <h1 className={'Header'}> CSS Module II</h1>
            <Banner01 />
            <Banner02 />
        </div>
    );
}

export default App;