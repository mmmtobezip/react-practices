import React, {useState, useEffect} from 'react';

export default function Hook({ color }) {
    const [backgroundColor, setBackgroundColor] = useState(null);
    const [text, setText] = useState('');

    /*
    1. Alternative1: useEffect Hook  
    -> getDerivedStateStateFromProps(in ClassComponent)
    */
   if(color !== backgroundColor) {
    setBackgroundColor(color);
   }

   /*
   2. After Rendering: 아래 classComponent의 완벽한 대체라기 보단 비슷한 느낌의 코드
   class component(componentDidUpdate, componentDidMount) 
   파라미터가 없으면 랜더링 후 바로 실행됨. 
   */
   useEffect(() => {
    console.log('After Rendering: update text or update background color');
   })

   /*
   3. After Rendering: 어떤 특정 상태의 변화에 반응하는 함수 
   -> 특정 상태에 맞는 변화를 주고 싶은 '파라미터'를 넘겨주면 됨. 
   랜더링 후, 특정 조건에 맞는 상황이 오면 실행됨. 
    */
//    useEffect(() => {
//     console.log('After Rendering Background Color Change');
//    }, [backgroundColor]); //backgroundColor가 변했을 때만 useEffect hook을 호출

   useEffect(() => {
    console.log('After Rendering Text Change');
   }, [text]); //text 변할 때만 useEffect hook을 호출


   /*
   4. Alternative2: componentDidMount, componentWillUnmount
   Mount된 후 실행될 수 있게 
   classcomponent 대체 
   */
   useEffect(() => {
    console.log("After Mount(componentDidMount)"); //mount 다음 -> rendering -> unmount 
    return () => { //unmount다음 호출을 위해선 함수 선언 후 가능 
        console.log("After Unmount(componentDidUnmount)"); 
        
    };
   }, []);


    return (
        <>
            <h3
                style={ {
                    width: 300,
                    height: 50,
                    backgroundColor: backgroundColor
                } } />
            <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        </>
    );
}