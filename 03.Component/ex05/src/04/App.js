import React, { useState, useEffect } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [currentTime, setcurrentTime] = useState(getCurrentTime());
    const [ticks, setTicks] = useState(0);

    function getCurrentTime() {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        };
    }

    useEffect(() => {
        //mount될 때 실행하는 코드 
        const intervalId = setInterval(() => {
            setcurrentTime(getCurrentTime()); //상태변화 -> 파라미터: 함수호출  
            setTicks((x) => x+1); //상태변화 -> 파라미터: 값 변화 "closer"
        }, 1000);

        //unmount뙬 때 실행되는 코드 (함수 리턴)
        return () => clearInterval(intervalId);
    }, []);

    if (currentTime.tick % 10 === 0) {
        return null;
    }

    return (
        <Clock
            title={`ex05: Clock Component I: ${ticks}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds}
        />
    );
}