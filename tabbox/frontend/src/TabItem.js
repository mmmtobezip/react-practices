import React from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem({no, name, isActive, selectTab}) {
    return (
        <li className={[Tab_Item, (isActive ? 'active' : '')].join(' ')}
        onClick={() => selectTab(no) }>
        {name}
        </li>
    );
}

export default TabItem;