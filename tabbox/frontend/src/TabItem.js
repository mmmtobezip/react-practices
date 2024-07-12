import React from 'react';

function TabItem({name, isActive}) {
    return (
       <li className={isActive ? 'active' : ''}>{name}</li>
    );
}

export default TabItem;