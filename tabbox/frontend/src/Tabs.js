import React from 'react';
import TabItem from './TabItem';

function Tabs({ tabs }) {
    return (
        <ul>
             {tabs.map(tab => (
                    <TabItem 
                        key={tab.no}
                        name={tab.name}
                        isActive={tab.active}
                        contents={tab.contents}
                    />
                ))}
        </ul>
    );
}

export default Tabs;