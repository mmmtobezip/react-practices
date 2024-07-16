import React from 'react';
import TabItem from './TabItem';
import {_Tabs} from './assets/scss/Tabs.scss';

function Tabs({tabs}) {
    return (
        <ul className={_Tabs}>
            {tabs.map(tab => (
                <TabItem 
                    key={tab.no} 
                    name={tab.name} 
                    isActive={tab.active} 
                />
            ))}
        </ul>
    );
}

export default Tabs;