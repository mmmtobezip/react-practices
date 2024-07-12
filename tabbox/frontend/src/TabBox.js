import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';

function TabBox({ tabs }) {
    //이곳에서 상태 변화가 일어나야함. 
    //contents의 정보는 Tabs에 넘기긴 애매하고, TabBox에 tabs라는 정보가 주어지면, js구문내에서 contents가 빠진 객체로 넘겨줄 순 있음 
    //즉, tabs-> 원본데이터 / contents가 빠진 새로운 배열을 만드는 것
    console.log({tabs: tabs});

    return (
        <div className={"tab-box"}>
            <Tabs tabs={tabs} />
            <TabView />
        </div>
    );
}

export default TabBox;