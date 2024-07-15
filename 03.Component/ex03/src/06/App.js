import React, {Component} from 'react';
import './assets/scss/App.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }


    //컴포넌트 자체(객체)에 셋팅하기에 this를 사용해도 괜찮다. 
    //함수를 만들고 this를 통해 컴포넌트 객체에 셋팅하는 것과 
    //05으 경우 직접 만들지 않고(함수 실행하고나면 날라기기에) userRef에게 함수 파라미터로 넘어오는 걸 잡아두라는 의미로 closer와 연관된 함수와 함께 사용한다. 
    render() {
        return (
            <div
                ref={ref => this.outerRef = ref}
                className={'App'}
                onScroll={() => {
                    console.log(this.outerRef.scrollTop, this.outerRef.clientHeight, this.innerRef.clientHeight)
                }}>
                <div ref={ref => this.innerRef = ref}>
                    <ul>
                    {
                        Array.from({length:100}, (_, i) => i+1).map(e => <li key={e}>{`아이텀 ${e}입니다.`}</li>)
                    }
                    </ul>
                </div>
            </div>
        );
    }
}