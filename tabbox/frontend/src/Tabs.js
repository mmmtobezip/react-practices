import React from 'react';
import TabItem from './TabItem';
import {_Tabs} from './assets/scss/Tabs.scss';

function Tabs({tabs, selectTab }) {
    return (
        <ul className={_Tabs}>
            {tabs.map(tab => (
                //아래 key값은 리액트 내부적으로 사용되는 프로퍼티, 사용x 
                <TabItem 
                    key={tab.no} 
                    name={tab.name} 
                    isActive={tab.active}
                    selectTab={selectTab}
                />
            ))}
        </ul>
    );
}

export default Tabs;