import React, {useState} from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';
import tabs from './assets/json/data';

function TabBox() {
    const[activeIndex, setActiveIndex] = useState(0); //몇번째 값이 들어오냐에 따라 해당 탭 색상 활성화
    const selectTab = function(no) { //property 전달 
        console.log(no);

        // 방법 1. 
        // const index = tabs.map(e => e.no).indexOf(no);
        // setActiveIndex(index); 

        // // 방법 2. 
        // const index = tabs.findIndex(e => e.no === no);
        // setActiveIndex(index);  

        // 방법3. 
        setActiveIndex(tabs.findIndex(e => e.no === no)); 

    };
    return (
        <div className={Tab_Box}>
            <Tabs 
                selectTab={selectTab} //방법 1, 2 
                //selectTab={no => setActiveIndex(tabs.findIndex(e => e.no === no)  // 방법 3을 한줄로 줄인. 
                tabs={tabs.map((e, i) => {
                const {contents, ...rest} = e; //rest배열은 {"no": 1, "name": "메뉴1", "active": false}가 하나의 인덱스 값 
                if(i === activeIndex) {
                    rest.active = true; //activeIndex번째 tab만 true -
                }
                return rest; // 배열이 아니라 객체 하나를 리턴해줘야함. 
            })}/>
            {/* tabs의 0번쨰의 contents를 넣어주면 됨. 
            <TabView contents={'테스트 뷰 내용입니다.'} /> */}
            <TabView contents={tabs[activeIndex].contents} />
        </div>
    );
}

export default TabBox;