import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';
import tabs from './assets/json/data';

function TabBox() {
    const[activeIndex, setActiveIndex] = React.useState(0); //몇번째 값이 들어오냐에 따라 해당 탭 색상 활성화

    return (
        <div className={Tab_Box}>
            {/* 순수 상태(tabs가 가진)  */}
            <Tabs 
                selectTab={(no) => {
                    //property로 Tabs에게 함수를 내려주고, Tabs는 select tab function을 받음. 
                    //no값이 들어오면 activeIndex를 바꿔준다. 
                    //Tabs에서 selectTab을 TabBox에게 내려주고 Tab

                    //TabItem에서 온클릭으로 selectTab을 Tabs에서 호출하면
                    //Tabs에서 넘어오는 nor값으로 TabBox에서 activeIndex를 상태 변환 시킨다. 
                }}
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