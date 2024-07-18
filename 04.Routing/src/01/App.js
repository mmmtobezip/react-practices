import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import Error404 from "./component/Error404";

export default function App() {
    const [route, setRoute] = useState('');


    const handlerHashChange = () => {
        console.log(window.location.hash);
        setRoute(window.location.hash.substring(1));
    }

    //함수형 이벤트 
    //주소창에 #~~로 들어오면, 페이지 이동(spa) 없이 주소창은 변화시켜 변화된 값으로 컴포넌트를 바꿀 때 
    //=hash url 사용 
    useEffect(() => {
        window.addEventListener("hashchange", handlerHashChange);

        return () => { //unmount될 때 실행 
            //함수에 대한 레퍼런스 전달
            window.removeEventListener("hashchange", handlerHashChange);
        }
    }, []);
    
    return (() => {
        switch(route) {
            case '' :
            case '/' :
                return <Main />;
            case '/guestbook' :
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;
            default :
                return <Error404 />;                    
        }
    })();
}