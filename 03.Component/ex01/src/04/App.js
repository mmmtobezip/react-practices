import React from 'react';
import MyComponent from './MyComponent';

function App() {
    return (
        <div id={'App'}>
            <MyComponent
                //어떤 값의 형태가 들어와야 될 지 명시한 곳 
                props02={20}
                props03={true} 
                props04={{no:1, name:'둘리'}}
                props05={['javascript', 'react', 'es6']}
                props06={() => '함수'}
                props07={10}
                props08={[true, false, false]}
                props09={{
                    no: 10,
                    name: '마이콜',
                    email: 'michol@gmail.com'
                }}/>
        </div>
    );
}

export {App};