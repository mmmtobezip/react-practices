import React, {useState} from 'react';
import Incrementor01 from './Incrementor01';

function Incrementor02({begin, step}) {
    //[현재 상태값, ]
    //상태 변경을 통해 화면에 그릴 땐, val은 변경된 값을 유지한다. 
    //userState함수는 closer함수와 연결되어있고, 값이 존재한다면, 원래값을 closer에서 받아와 val에 넣고 그게 아니라면 처음엔 begin이 호출 & 셋팅
    //setVal을 부를 때 다시 랜더링되고, 이때 useState가 호출됨. -> val은 항상 최신값이 셋팅되어있다. 
    const[val, setVal] = useState(begin); 
    // const[val2, setVal2] = useState(20);
    return (
        <div>
            <button onClick={() => {
                setVal(val + step); //값 변경 시 재랜더링을 위해 Incrementor02함수가 호출되고, begin은 10이 셋팅되어 있지만, 현재 상태값을 useState 20을 val에 셋팅하고, 이 값을 변경할 수 있는 setVal은 그대로 리턴해주고, val 또한 <span>에 값을 셋팅해 넘겨준다. 
            }}>
                <strong>
                    {'+'}
                </strong>
            </button>
            {' '}
            <span>
                {val}
            </span>
        </div>
    );
}

export default Incrementor02;