import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        //constructor에서 state 초기화 
        this.state = this.__getCurrentTime();
    }

    __getCurrentTime() { //내부에서만 쓰는 함수 '__' 표시 (관례)
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            tick: this.state ? this.state.tick + 1 : 0 //null ,undefined -> false -> 0 
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => { //안끄면 memory leak 발생 가능, 화살표 함수 쓰면 bind(this) 자체적으로 해줌 (=컴포넌트 객체로 만들어준다 )
            //const now = new Date(); //interver의 callback function
            this.setState(this.__getCurrentTime()); 
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    
    render() {
        return (
            this.state.tick % 10 === 0 ?
                null:
                //조건이 맞는 시점에 아래는 unmount
                <Clock
                    title={`ex05: Clock Component I: ${this.state.tick}`} //시계가 흐른 시간에 대한 총합 
                    hours={this.state.hours} //logic은 classComponent로 
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                />
        );
    }
}