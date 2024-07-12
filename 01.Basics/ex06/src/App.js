import React from 'react';

function App() {
    //방법 1 
    //const App = React.createElement('div', null, 'Hello World');
    // return App; 

    //방법 1과 동일한 동작(html tag로 변경하기) with babel 
    return (
        <div>
            {'Hello World'}
        </div>
    );
}

export {App};