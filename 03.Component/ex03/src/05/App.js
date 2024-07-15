import React, {useRef} from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outerRef = useRef(null); //mount 전 초기화 
    const innerRef = useRef(null);

    return (
        <div
            ref={outerRef} //outer에서 스크롤 생성  -> onScroll Event는 outer에서 받음. 
            className={'App'}
            onScroll={e => {
                //oh: clientHeight 
                //scrollTop+outerRef.current.clientHeight == innerRef.current.clientHeight) 값이 같아지면, 
                console.log(outerRef.current.scrollTop, outerRef.current.clientHeight, innerRef.current.clientHeight)
            }}>
            <div ref={innerRef}>
                <ul>
                    {
                        Array.from({length:100}, (_, i) => i+1).map(e => <li key={e}>{`아이텀 ${e}입니다.`}</li>)
                    }
                </ul>
            </div>
        </div>
    );
}