import React from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
    // 외부 handler function으로 뺌 

    // key press(code) 관련 이벤트 
    const onKeyPressInput = (event) => {
        if(event.key == 'Enter') {
            // console.log(`Key pressed: ${event.key}`);
            console.log("key Presse: " + event.target.value);
        }
    };

    // key value change 관련 이벤트 
    const onChangeInput = (event) => {
        console.log("Change: " + event.target.value);
    };

    // ui 변화시킬 때 사용하는 이벤트 Focus & Blur 
    const onFocusInput = () => {
        console.log("Focus");
    }

    const onBlurInput = () => {
        console.log("Blur");
    }

    // mouse event 
    const onMouseOverImg = (event) => {
        console.log('mouseover', `x=${event.clientX}, y=${event.clientY}`);
    }

    const onMouseMoveImg = (event) => {
        console.log('mousemove', `x=${event.clientX}, y=${event.clientY}`);
    }

    const onMouseOutImg = (event) => {
        console.log('mouseout', `x=${event.clientX}, y=${event.clientY}`);
    }

    const onMouseDownImg = (event) => {
        console.log('mousedown', `x=${event.clientX}, y=${event.clientY}`);
    }

    const onMouseUpImg = (event) => {
        console.log('mouseup', `x=${event.clientX}, y=${event.clientY}`);
    }

    const onClickImg = (event) => {
        console.log('click', `x=${event.clientX}, y=${event.clientY}`);
    }

    const onDoubleClickImg = (event) => {
        console.log('dblclick', `x=${event.clientX}, y=${event.clientY}`);
    }

    return (
        <>
            <h2>Event Handler  예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요' 
                
                onKeyPress={onKeyPressInput} 
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput}
            /> 
                <br/>
                <br/>
            <img
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={logo} 
                onMouseOver={onMouseOverImg}
                onMouseMove={onMouseMoveImg}
                onMouseOut={onMouseOutImg}
                onMouseDown={onMouseDownImg}
                onMouseUp={onMouseUpImg}
                onClick={onClickImg}
                onDoubleClick={onDoubleClickImg}
            />
        </>
    );
}