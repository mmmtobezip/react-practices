import React, { Component } from 'react';

class Header extends Component {
    render() { // 사이클과 관련된 상태(state) 관리가 중요 -> event를 받아야 state 변경을 통한 업데이트 가능 
        return ( //return () : class 컴포넌트..?
            <div>
                <h1>Ex05</h1>
            </div>
        );
    }
}

export default Header;