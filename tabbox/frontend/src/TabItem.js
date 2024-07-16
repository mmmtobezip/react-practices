import React from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem({name, isActive, selectTab) {
    return (
        <li className={[Tab_Item, (isActive ? 'active' : '')].join(' ')}
        
        
        >
        
        
        {name}
        
        </li>
    );
}

export default TabItem;